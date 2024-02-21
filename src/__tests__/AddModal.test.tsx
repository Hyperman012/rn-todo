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

    it('sets text value', () => {
        const input = modal.getByPlaceholderText('Enter To-Do');
        fireEvent.changeText(input, 'do the dishes');
        modal.getByDisplayValue('do the dishes');
    });

    describe('confirm button', () => {
        it('closes', () => {
            fireEvent.press(modal.getByText('Save'));
            expect(setIsVisibleSpy).toBeCalledWith(false);
        });

        it('saves to context', () => {});
    });

    it('closes', () => {
        fireEvent.press(modal.getByText('Close'));

        expect(setIsVisibleSpy).toBeCalledWith(false);
    });
});
