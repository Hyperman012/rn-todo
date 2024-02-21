import { Text, View } from 'react-native';
import { Todo } from './Todo.tsx';

export function Card(props: { todo: Todo }) {
    return (
        <View>
            <Text>{props.todo.title}</Text>
        </View>
    );
}
