import { createContext, PropsWithChildren, useContext } from 'react';
import { Todo } from './Todo.tsx';

export const TodoContext = createContext<Todo[]>([]);

export const useTodos = (): Todo[] => {
    return useContext(TodoContext);
};

export function TodoProvider(props: PropsWithChildren) {
    const todos: Todo[] = [];
    return <TodoContext.Provider value={todos}>{props.children}</TodoContext.Provider>;
}
