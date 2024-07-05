import React, {useState} from 'react';

const TodoList = () => {
    const[todoText, setTodo] = useState('');
    const[todos, setTodos] = useState([])

    const addTodo = () => {
        if(todoText.trim()){
            const newTodo = {text: todoText, completed: false};
            setTodos([...todos, newTodo]);
            setTodo('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return(
        <div>
            <h1>To Do List</h1>
                
            <input type='text'                   
                value = {todoText}
                onChange = {(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add Job</button>
            
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList;