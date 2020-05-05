import {createAction} from 'redux-actions'

export const ActionTypes = {
    CREATE_ROLL:'CREATE_ROLL'
};
const ActionSpec = {
    [ActionTypes.CREATE_ROLL]: {propagateToServer: true}
};

export let Actions = {};
for (let action in ActionSpec) {
    let meta = {propagateToServer: ActionSpec[action].propagateToServer, fromServer:false};
    Actions[action] = createAction(action, x => x, () => meta);
    ActionTypes[action] = action;
}


const rollDice = function(outOf){
    return 1 + Math.floor(Math.random()*outOf);
};

export const createActions = dispatch => {
    return {
        [ActionTypes.CREATE_ROLL]: (name, outOf) =>{
            const value = rollDice(outOf);
            dispatch(Actions.CREATE_ROLL({name,value}))
        }
    }
};
