import { Pressable, Text } from 'react-native';
import React from 'react';

export function AddTodo(props: { setIsVisible: (value: boolean) => void }) {
    return (
        <Pressable onPress={() => props.setIsVisible(true)}>
            <Text>Add</Text>
        </Pressable>
    );
}
