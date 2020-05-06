import {applyMiddleware, createStore} from "redux";
import WSClient from "./WSClient";
import RootReducer from "../reducers";
import {createServerMiddleware} from "./middleware/wsServer";
const express = require('express');
const http = require('http');
const WebSocket = require('ws');


const httpServer = http.createServer();
const expressServer = express();
const dir = `${__dirname}/../../build`;
expressServer.use(express.static(dir));
httpServer.on('request',expressServer);
const wss = new WebSocket.Server({server: httpServer});
wss.broadcast = WSClient.broadcast;


function onMessage(data){
    var msg = JSON.parse(data);
    if (msg.type === 'action'){
        // Tag action w/ sender id so can exclude it from broadcast in wsServer middleware.
        msg.action.meta.sender = this.id;
        store.dispatch(msg.action);
    } else {
        console.warn('unrecognized ws message type: ',msg.type,JSON.stringify(data));
    }
}

function onConnect(ws){
    const client = new WSClient(ws);
    console.log('Connected client ', client.id, new Date(), "\n");
    client.ws.on('message',onMessage.bind(client));
    client.ws.on('close', ()=>{client.remove()});
}

wss.on('connection',onConnect);
httpServer.listen(3000);
console.log('listening...\n');

// Create store
const serverMiddleware = createServerMiddleware(wss);
const store = createStore(RootReducer, applyMiddleware(serverMiddleware));
