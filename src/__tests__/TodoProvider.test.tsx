import 'react-native';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { TodoProvider } from '../TodoProvider.tsx';
import { Text } from 'react-native';

describe('todo provider', () => {
    it('renders children', () => {
        const screen = render(
            <TodoProvider>
                <Text>Hello</Text>
            </TodoProvider>,
        );
        screen.getByText('Hello');
    });
});
