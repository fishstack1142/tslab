import React from "react";
// import dayjs from "dayjs";

// interface Todo {
//     text: string;
//     complete: boolean;
// }

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{
          textDecoration: todo.complete ? "line-through" : undefined,
          color: todo.complete ? "red" : undefined,
        }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
      {todo.complete ? "  " + "@ " + todo.finished : ""}
    </li>
  );
};
