import 'react-native';
import { describe, expect, it } from '@jest/globals';
import { act, render, renderHook } from '@testing-library/react-native';
import { defaultTodo, TodoProvider, useTodos } from '../TodoProvider.tsx';
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

    describe('useTodos hook', () => {
        it('returns default from provider ', () => {
            const wrapper = (props: PropsWithChildren) => <TodoProvider children={props.children} />;
            const hook = renderHook(useTodos, { wrapper });
            expect(hook.result.current.todos).toEqual([{ title: 'Make Todo List' }]);
        });

        it('can add too the list', () => {
            const wrapper = (props: PropsWithChildren) => <TodoProvider children={props.children} />;
            const hook = renderHook(useTodos, { wrapper });
            expect(hook.result.current.add).toBeDefined();
        });

        it('gets Todo context', () => {
            const wrapper = (props: PropsWithChildren) => <TodoProvider>{props.children}</TodoProvider>;
            const renderHookResult = renderHook(useTodos, { wrapper });

            const todo: Todo = {
                title: 'Do the dishes',
            };

            act(() => renderHookResult.result.current.add(todo));

            expect(renderHookResult.result.current.todos).toEqual([defaultTodo, todo]);
        });
    });
});
