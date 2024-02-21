import { View } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';
import { useTodos } from '../TodoProvider.tsx';

export function TodoCards() {
    const todo = useTodos();
    return (
        <View>
            {todo.todos.map((todo, index) => (
                <TodoCard key={index} todo={todo} />
            ))}
        </View>
    );
}
