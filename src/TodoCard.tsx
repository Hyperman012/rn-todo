import { Pressable, Text, View } from 'react-native';
import { Todo } from './Todo.tsx';
import React from 'react';
import { TodoPostIt } from './TodoPostIt.tsx';

export function TodoCard(props: { todo: Todo }) {
    return (
        <TodoPostIt>
            <View style={{ flex: 1, paddingVertical: 10, gap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <DeleteTodoButton />
                </View>
                <Text>{props.todo.title}</Text>
            </View>
        </TodoPostIt>
    );
}

function DeleteTodoButton() {
    return (
        <Pressable>
            <Text style={{ fontWeight: 'bold' }}>x</Text>
        </Pressable>
    );
}
