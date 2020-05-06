import {ActionTypes} from "../actions";
import RollsReducer from './rolls'

const defaultState = {
    rolls:{
        values:{},
        order:[]
    },
    connection:{
        url:'',
        port:null,
        isConnected:false
    }
};

const connectionReducer = (connection, {payload,type})=>{
    if(type===ActionTypes.CONNECT){
        return Object.assign({},connection,payload);
    }
};

export default function RootReducer(state=defaultState, action){
    return {
        rolls: RollsReducer(state.rolls,action),
        connection: connectionReducer(state.connection, action)
    }
}