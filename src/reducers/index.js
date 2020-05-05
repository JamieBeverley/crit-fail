import {ActionTypes} from "../actions";
import RollsReducer from './rolls'

const defaultState = {
    rolls:{
        values:{},
        order:[]
    }
};

export default function RootReducer(state=defaultState, action){
    return {
        rolls: RollsReducer(state.rolls,action)
    }
}