import 'react-native';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, RenderResult } from '@testing-library/react-native';
import React from 'react';
import { AddModal } from '../AddModal.tsx';

describe('AddModal', () => {
    let modal: RenderResult;
    let setIsVisibleSpy: jest.Mock;

    beforeEach(() => {
        setIsVisibleSpy = jest.fn();
        modal = render(<AddModal isVisible={true} setIsVisible={setIsVisibleSpy} />);
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
        });
    });

    it('closes', () => {
        fireEvent.press(modal.getByText('Close'));

        expect(setIsVisibleSpy).toBeCalledWith(false);
    });
});
