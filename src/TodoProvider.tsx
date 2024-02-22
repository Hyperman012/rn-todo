import { createContext, PropsWithChildren, useContext } from 'react';
import { Todo } from './Todo.tsx';
import { useReactState } from 'use-react-ref';

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
    const todoArray = useReactState([defaultTodo]);
    const todoCollection: TodoCollection = {
        todos: todoArray.value,
        add(newTodo: Todo): void {
            if (todoArray.isInitialValue()) {
                todoArray.set([newTodo]);
                return;
            }
            todoArray.set(todos => todos.concat(newTodo));
        },
    };

    return <TodoContext.Provider value={todoCollection}>{props.children}</TodoContext.Provider>;
}
