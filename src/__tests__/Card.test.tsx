import 'react-native';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { Card } from '../Card.tsx';
import { Todo } from '../Todo.tsx';

describe('Card ', () => {
    it('renders todo comment', () => {
        const todo: Todo = {
            title: 'Create Todo List.',
        };
        const renderAPI = render(<Card todo={todo} />);
        renderAPI.getByText('Create Todo List.');
    });
});
