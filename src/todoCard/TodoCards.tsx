import { View } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';
import { useTodos } from '../TodoProvider.tsx';

export function TodoCards() {
    const todos = useTodos();
    return (
        <View>
            {todos.map(item => (
                <TodoCard todo={item} />
            ))}
        </View>
    );
}
