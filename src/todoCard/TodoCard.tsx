import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../Todo.tsx';
import React from 'react';
import { TodoPostIt } from './TodoPostIt.tsx';

export function TodoCard(props: { todo: Todo }) {
    return (
        <TodoPostIt>
            <View style={styles.cardContainer}>
                <View style={styles.deleteButtonPosition}>
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
            <Text style={styles.deleteText}>x</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        paddingVertical: 10,
        gap: 10,
    },
    deleteButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    deleteText: {
        fontWeight: 'bold',
    },
});
