import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import dayjs from 'dayjs'

export function label() {
  return "Hello React";
}

const sayHello = () => {
  return "say Hello World.";
};

const initialTodos: Todo[] = [
  // {
  //   text: "walk",
  //   complete: true,
  //   finished: dayjs().format('DD-MM-YYYY HH:mm:ss')
  // },
  // {
  //   text: "do shore",
  //   complete: false,
  //   finished: dayjs().format('DD-MM-YYYY HH:mm:ss')
  // },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, finished: dayjs().format('DD-MM-YYYY HH:mm:ss') }
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
