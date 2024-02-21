import 'react-native';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { TodoCard } from '../TodoCard.tsx';
import { Todo } from '../Todo.tsx';

describe('TodoCard ', () => {
    it('renders todo comment', () => {
        const todo: Todo = {
            title: 'Create Todo List.',
        };
        const renderAPI = render(<TodoCard todo={todo} />);
        renderAPI.getByText('Create Todo List.');
    });
});
