import 'react-native';
import { describe, it } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { AddModal } from '../AddModal.tsx';

describe('AddModal', () => {
    it('has text input', () => {
        const modal = render(<AddModal />);
        modal.getByPlaceholderText('Enter To-Do');
    });

    it('sets text value', () => {
        const modal = render(<AddModal />);
        const input = modal.getByPlaceholderText('Enter To-Do');
        fireEvent.changeText(input, 'do the dishes');

        modal.getByDisplayValue('do the dishes');
    });
});
