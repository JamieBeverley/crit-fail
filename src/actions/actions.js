import Connection from "../Connection";
import {Actions, ActionTypes} from "./index";

const rollDice = function (outOf) {
    return 1 + Math.floor(Math.random() * outOf);
};

export const createActions = dispatch => {
    return {
        [ActionTypes.CREATE_ROLL]: (name, outOf) => {
            const value = rollDice(outOf);
            dispatch(Actions.CREATE_ROLL({name, value}))
        },
        [ActionTypes.CONNECT]: (url, port) => {
            url = url || window.location.hostname;
            port = port || window.location.port;
            let actions = Actions;
            let onOpen = () => {
                dispatch(Actions.CONNECT({url, port, isConnected: true}))
            };
            let onClose = () => {
                dispatch(actions.CONNECT({url: url, port: port, isConnected: false}))
            };
            let onError = onClose;
            Connection.init(url, port, onOpen, onClose, onError);
        }
    }
};
