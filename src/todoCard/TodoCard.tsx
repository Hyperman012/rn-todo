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
                <View style={styles.titleContainer}>
                    <Text>{props.todo.title}</Text>
                </View>
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
        width: '100%',
        padding: 10,
        gap: 20,
    },
    titleContainer: {
        alignItems: 'center',
    },
    deleteButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    deleteText: {
        fontWeight: 'bold',
    },
});
