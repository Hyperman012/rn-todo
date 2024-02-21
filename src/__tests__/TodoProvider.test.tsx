import 'react-native';
import { describe, expect, it } from '@jest/globals';
import { act, render, renderHook } from '@testing-library/react-native';
import { TodoProvider, useTodos } from '../TodoProvider.tsx';
import { Text } from 'react-native';
import { PropsWithChildren } from 'react';
import { Todo } from '../Todo.tsx';

describe('todo provider', () => {
    it('renders children', () => {
        const screen = render(
            <TodoProvider>
                <Text>Hello</Text>
            </TodoProvider>,
        );
        screen.getByText('Hello');
    });

    it('gets Todo context', () => {
        const wrapper = (props: PropsWithChildren) => <TodoProvider>{props.children}</TodoProvider>;
        const renderHookResult = renderHook(useTodos, { wrapper });

        const todo: Todo = {
            title: 'Do the dishes',
        };

        act(() => renderHookResult.result.current.add(todo));

        expect(renderHookResult.result.current.todos).toEqual([todo]);
    });
});
