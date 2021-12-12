import React, { useState} from 'react';

const TodoItem = React.memo(function TodoItem ({ todo, onToggle, onRemove }){
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </li>
    )
});

const TodoList = React.memo(function TodoList({ todos, onToggle, onRemove }){
    return(
        <ul>
            {
                todos.map(todo => <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />)
            }
        </ul>
    )
});

function Todos({ todos, onCreate, onToggle, onRemove }){
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('')
    }   

    return(
        <div>
            <form onSubmit={onSubmit} >
                <input value={text} onChange={onChange} placeholder='할일을 입력하세요...'/>
                <button type="submit">등록</button>
            </form>
            <TodoList 
                todos={todos}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        </div>
    )
}

export default React.memo(Todos);