import { ScrollView } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';
import { useTodos } from '../TodoProvider.tsx';
import { MediaStyleSheet } from '../stylesheet.tsx';

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

const styles = MediaStyleSheet.create({
    scrollContainer: {
        tablet: {
            flexDirection: 'row',
            padding: 10,
        },
    },
});
