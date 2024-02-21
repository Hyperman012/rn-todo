import 'react-native';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { fireEvent, render, RenderResult } from '@testing-library/react-native';
import React from 'react';
import { AddModal } from '../AddModal.tsx';

describe('AddModal', () => {
    let modal: RenderResult;
    beforeEach(() => {
        modal = render(<AddModal />);
    });

    it('has text input', () => {
        modal.getByPlaceholderText('Enter To-Do');
    });

    it('sets text value', () => {
        const input = modal.getByPlaceholderText('Enter To-Do');
        fireEvent.changeText(input, 'do the dishes');
        modal.getByDisplayValue('do the dishes');
    });

    it('closes', () => {
        fireEvent.press(modal.getByText('Close'));

        expect(() => {
            modal.getByPlaceholderText('Enter To-Do');
        }).toThrow();
    });
});
