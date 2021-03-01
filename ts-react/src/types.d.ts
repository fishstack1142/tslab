interface Todo {
    text: string;
    complete: boolean;
    finished: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;