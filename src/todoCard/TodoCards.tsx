import { ScrollView, StyleSheet } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';
import { useTodos } from '../TodoProvider.tsx';

export function TodoCards() {
    const todo = useTodos();
    return (
        <ScrollView style={styles.scrollContainer}>
            {todo.todos.map((item, index) => (
                <TodoCard todo={item} key={index} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {},
});
