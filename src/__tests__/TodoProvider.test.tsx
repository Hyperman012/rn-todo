import 'react-native';
import { describe, expect, it } from '@jest/globals';
import { act, render, renderHook } from '@testing-library/react-native';
import { defaultTodo, TodoProvider, useTodos } from '../TodoProvider.tsx';
import { Text } from 'react-native';
import { PropsWithChildren } from 'react';

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

        it('can add to the list', () => {
            const wrapper = (props: PropsWithChildren) => <TodoProvider children={props.children} />;
            const hook = renderHook(useTodos, { wrapper });
            expect(hook.result.current.add).toBeDefined();
        });

        it('adds to the list', () => {
            const wrapper = (props: PropsWithChildren) => <TodoProvider children={props.children} />;
            const hook = renderHook(useTodos, { wrapper });
            const newTodo = { title: 'do the dishes' };
            act(() => {
                hook.result.current.add(newTodo);
            });
            expect(hook.result.current.todos).toEqual([defaultTodo, newTodo]);
        });
    });
});
