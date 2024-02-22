import 'react-native';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { act, render } from '@testing-library/react-native';
import { defaultTodo, TodoProvider, useTodos } from '../TodoProvider.tsx';
import { Text } from 'react-native';
import { ReactRenderBuilder } from 'react-render-builder';

class RenderBuilder extends ReactRenderBuilder {
    withTodo(): this {
        this.addElement(children => <TodoProvider children={children} />);
        return this;
    }
}

describe('todo provider', () => {
    it('renders children', () => {
        const screen = render(
            <TodoProvider>
                <Text>Hello</Text>
            </TodoProvider>,
        );
        screen.getByText('Hello');
    });

    describe('useTodos hook', () => {
        let renderBuilder: RenderBuilder;

        beforeEach(() => {
            renderBuilder = new RenderBuilder().withTodo();
        });

        it('returns default from provider ', () => {
            const hook = renderBuilder.renderHookResult(useTodos);
            expect(hook.todos).toEqual([{ title: 'Make Todo List' }]);
        });

        it('adds to the list', () => {
            const hook = renderBuilder.renderHook(useTodos);
            const newTodo = { title: 'do the dishes' };
            act(() => {
                hook.result.current.add(newTodo);
            });
            expect(hook.result.current.todos).toEqual([defaultTodo, newTodo]);
        });
    });
});
