import React, { useState } from 'react';

function App() {
  const [todoText, setTodoText] = useState(''); // State for todo text
  const [todos, setTodos] = useState([]); // State to store todo items

  const addTodo = () => {
    if (todoText.trim()) { // Check if text is not empty
      const newTodo = { text: todoText, completed: false };
      setTodos([...todos, newTodo]); // Update state with new todo
      setTodoText(''); // Clear input field after adding
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" placeholder="Add a Todo" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(index)}>X</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
