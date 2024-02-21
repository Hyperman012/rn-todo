import { View } from 'react-native';
import { AddTodo } from './AddTodo.tsx';
import React from 'react';

export function TodoButtons(props: { setIsVisible: (value: boolean) => void }) {
    return (
        <View style={{ alignItems: 'flex-end', padding: 10 }}>
            <AddTodo setIsVisible={props.setIsVisible} />
        </View>
    );
}
