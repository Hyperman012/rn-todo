import { ReactRenderBuilder } from 'react-render-builder';
import { TodoCollection, TodoContext, TodoProvider } from './TodoProvider.tsx';

export class RenderBuilder extends ReactRenderBuilder {
    withTodo(): this {
        this.addElement(children => <TodoProvider children={children} />);
        return this;
    }

    spyTodoCollection(todoCollection: TodoCollection): this {
        this.addElement(children => <TodoContext.Provider value={todoCollection} children={children} />);
        return this;
    }
}
