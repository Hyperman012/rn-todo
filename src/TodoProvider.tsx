import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Todo } from './Todo.tsx';

export interface TodoCollection {
    todos: Todo[];
    add(todo: Todo): void;
}

export const TodoContext = createContext<TodoCollection | undefined>(undefined);

export const useTodos = (): TodoCollection => {
    const todoCollection = useContext(TodoContext);

    if (todoCollection === undefined) {
        throw new Error('useTodos must be used in a Todo Provider');
    }

    return todoCollection;
};

export const defaultTodo: Todo = {
    title: 'Make Todo List',
};

export function TodoProvider(props: PropsWithChildren) {
    const [todos, setTodos] = useState<Todo[]>([defaultTodo]);
    const todoCollection: TodoCollection = {
        todos,
        add(newTodo: Todo): void {
            setTodos(todos => todos.concat(newTodo));
        },
    };

    return <TodoContext.Provider value={todoCollection}>{props.children}</TodoContext.Provider>;
}
