import { useState } from "react";

import './../styles/todo-app.scss';

const MOCK_TODOS = [
  {
    id: 1,
    text: "Todo 1",
    done: false,
  },
  {
    id: 2,
    text: "Todo 2",
    done: false,
  },
  {
    id: 3,
    text: "Todo 3",
    done: true,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [value, setValue] = useState('');

  const addTodo = () => {
    if(value) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text: value,
          done: false
        }
      ])
      setValue('');
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  const toggleTodo = (id) => {
    setTodos(() => {
      todos.map((todo) => {
        todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    });
  }

  return (
    <div className="todo-app__wrapper">
      <div>
        <input placeholder="Add Todo" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => addTodo()}>Add Todo</button>
      </div>
      <ul className="todo-app__list">
      {todos.map(todo => {
          return (
            <li key={todo.id} className={!todo.done ? '' : 'todo-app__item--done'}>
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
              <label htmlFor="doneTodo" className="todo-app__checkbox-label">
                <input className="todo-app__checkbox-input" onBlur={toggleTodo(todo.id)} type="checkbox" />
              </label>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
};

export default TodoApp;