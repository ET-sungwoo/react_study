import { useRef, useState } from 'react';

import classes from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          text: todoText,
          id: new Date().toISOString(),
        },
      ];
    });
  };

  /* NewTodo */
  const todoTextInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodoHandler(enteredText);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
      {/* Todos */}
      <ul className={classes.todos}>
        {/* TodoItem */}
        {todos.map((item) => (
          <li key={item.id} className={classes.item}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
