const initialState = [
    /* 
    {
        id: 1,
        text: '예시',
        done: false
    }
    */
]

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOOGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id
                ? { ...todo, done: !todo.done}
                : todo
            )
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}