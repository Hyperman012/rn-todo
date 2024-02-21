import 'react-native';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, RenderResult } from '@testing-library/react-native';
import React from 'react';
import { AddModal } from '../AddModal.tsx';
import { TodoCollection, TodoContext } from '../TodoProvider.tsx';
import { Todo } from '../Todo.tsx';

function createSpyTodoCollection(): TodoCollection {
    return {
        todos: [],
        add: jest.fn(),
    };
}

describe('AddModal', () => {
    let modal: RenderResult;
    let setIsVisibleSpy: jest.Mock;
    let spyTodoCollection: TodoCollection;

    beforeEach(() => {
        setIsVisibleSpy = jest.fn();
        spyTodoCollection = createSpyTodoCollection();
        modal = render(
            <TodoContext.Provider value={spyTodoCollection}>
                <AddModal isVisible={true} setIsVisible={setIsVisibleSpy} />
            </TodoContext.Provider>,
        );
    });

    it('has text input', () => {
        modal.getByPlaceholderText('Enter To-Do');
    });

    describe('with todo text inserted ', () => {
        const todoTitle = 'do the dishes';

        beforeEach(() => {
            const input = modal.getByPlaceholderText('Enter To-Do');
            fireEvent.changeText(input, todoTitle);
        });

        it('sets text value', () => {
            modal.getByDisplayValue(todoTitle);
        });

        describe('saves', () => {
            beforeEach(() => {
                fireEvent.press(modal.getByText('Save'));
            });

            it('closes', () => {
                expect(setIsVisibleSpy).toBeCalledWith(false);
            });

            it('saves to context', () => {
                const expectedTodo: Todo = {
                    title: todoTitle,
                };
                expect(spyTodoCollection.add).toBeCalledWith(expectedTodo);
            });
        });
    });

    it('closes', () => {
        fireEvent.press(modal.getByText('Close'));

        expect(setIsVisibleSpy).toBeCalledWith(false);
    });
});
