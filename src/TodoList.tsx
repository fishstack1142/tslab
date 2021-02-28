import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem key={i} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
