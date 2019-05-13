//import * as types from '../actions/ActionTypes';
import number from './number';
import color from './color';

import { combineReducers } from 'redux';

//초기 상태 정의
/*const initialState = {
    color: 'black',
    number: 0
}

function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1
            }
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}*/

const reducers = combineReducers({
    numberData: number,
    colorData: color
})

export default reducers;