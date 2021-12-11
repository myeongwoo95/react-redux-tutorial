import { createStore } from "redux";

//초기값
const initialState = {
    counter: 0,
    text: '',
    list: []
};

//action 타입 (대문자)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//action 생성 함수 (소문자)
const increase = () => ({
    type: INCREASE,
})

const decrease = () => ({
    type: DECREASE,
})

const changeText  = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList  = item => ({
    type: ADD_TO_LIST,
    item
})

//Reducer
//리덕스에서 초기 상태를 만들때 Reducer를 한번 호출하기 때문에 기본값을 설정해줘야하 한다.
function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        default: 
            return state
    }
}

//store 생성 및 store 조회
const store = createStore(reducer);
console.log(store.getState());

//구독 및 dispatch

const listener = () => {
    const state = store.getState();
    console.log(state);
};

//eslint-disable-next-line
const unsubscribe = store.subscribe(listener); //구독
//unsubscribe(); //구독해지

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({id: 1, text: '와우'}));

//store instance를 콘솔에서 사용할 수 있다.
window.store = store;


