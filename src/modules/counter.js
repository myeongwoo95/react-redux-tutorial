const initialState = {
    number: 0,
    diff: 1
}
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = increase => ({ type:INCREASE });
export const decrease = decrease => ({ type:DECREASE });
export const setDiff = diff =>({ type: SET_DIFF, diff });

export default function counter(state = initialState, action){
    switch(action.type){
        case SET_DIFF:
            return{
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}
