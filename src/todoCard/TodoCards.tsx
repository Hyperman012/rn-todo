import { FlatList } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';
import { useTodos } from '../TodoProvider.tsx';

export function TodoCards() {
    const todo = useTodos();
    return (
        <FlatList data={todo.todos} renderItem={listItem => <TodoCard key={listItem.index} todo={listItem.item} />} />
    );
}
