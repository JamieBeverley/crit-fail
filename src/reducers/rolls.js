import {ActionTypes} from "../actions";
import {Id} from "../utils";

const defaultRolls = {
    values: {},
    order: []
};

const reducerFns = {};

reducerFns[ActionTypes.CREATE_ROLL] = (rolls, {payload}) => {
    const id = Id();
    const name = payload.name;
    const value = payload.value;
    const newRoll = {name,value};
    return {
        values:{...rolls.values, [id]:newRoll},
        order:[...rolls.order,id]
    }
};

const rollsReducer = (rolls = defaultRolls, action) => reducerFns[action.type] ? reducerFns[action.type](rolls, action) : rolls;
export default rollsReducer