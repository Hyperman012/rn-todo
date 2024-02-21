import { View } from 'react-native';
import { TodoCard } from './TodoCard.tsx';
import React from 'react';

export function TodoCards() {
    return (
        <View>
            <TodoCard todo={{ title: 'Make List' }} />
        </View>
    );
}
