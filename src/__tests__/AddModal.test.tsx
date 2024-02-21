import 'react-native';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import React from 'react';
import { AddModal } from '../AddModal.tsx';

describe('AddModal', () => {
    it('has text input', () => {
        const modal = render(<AddModal />);
        modal.getByPlaceholderText('Enter To-Do');
    });
});
