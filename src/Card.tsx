import { Text, View } from 'react-native';

export type Todo = {
    title: string;
};

export function Card(props: { todo: Todo }) {
    return (
        <View>
            <Text>{props.todo.title}</Text>
        </View>
    );
}
