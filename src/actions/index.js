import {createAction} from 'redux-actions'

export const ActionTypes = {
    CREATE_ROLL: 'CREATE_ROLL',
    CONNECT: 'CONNECT'
};

const ActionSpec = {
    [ActionTypes.CREATE_ROLL]: {propagateToServer: true},
    [ActionTypes.CONNECT]: {propagateToServer: false}
};

export let Actions = {};
for (let action in ActionSpec) {
    let meta = {propagateToServer: ActionSpec[action].propagateToServer, fromServer: false};
    Actions[action] = createAction(action, x => x, () => meta);
    ActionTypes[action] = action;
}