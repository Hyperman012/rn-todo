import 'react-native';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { act } from '@testing-library/react-native';
import { useTodos } from '../TodoProvider.tsx';
import { Text } from 'react-native';
import { RenderBuilder } from '../RenderBuilder.tsx';

describe('todo provider', () => {
    let renderBuilder: RenderBuilder;

    beforeEach(() => {
        renderBuilder = new RenderBuilder().withTodo();
    });
    it('renders children', () => {
        const screen = renderBuilder.render(<Text>Hello</Text>);
        screen.getByText('Hello');
    });

    describe('useTodos hook', () => {
        it('returns default from provider ', () => {
            const hook = renderBuilder.renderHookResult(useTodos);
            expect(hook.todos).toEqual([{ title: 'Make Todo List' }]);
        });

        it('clears the default todo on first add', () => {
            const hook = renderBuilder.renderHook(useTodos);
            const newTodo = { title: 'do the dishes' };
            act(() => {
                hook.result.current.add(newTodo);
            });
            expect(hook.result.current.todos).toEqual([newTodo]);
        });
    });
});
