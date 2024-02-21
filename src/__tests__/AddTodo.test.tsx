import 'react-native';
import { describe, expect, it, jest } from '@jest/globals';
import { AddTodo } from '../AddTodo.tsx';
import { fireEvent, render } from '@testing-library/react-native';

describe('Add Todo', () => {
    it('navigates to add screen', () => {
        const setIsVisible = jest.fn();
        const addButton = render(<AddTodo setIsVisible={setIsVisible} />);
        fireEvent.press(addButton.getByText('Add'));
        expect(setIsVisible).toBeCalledWith(true);
    });
});
