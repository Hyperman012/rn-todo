import { View } from 'react-native';
import { AddTodo } from './AddTodo.tsx';
import React from 'react';

export function TodoButtons(props: { isVisible: (value: ((prevState: boolean) => boolean) | boolean) => void }) {
    return (
        <View style={{ alignItems: 'flex-end', padding: 10 }}>
            <AddTodo setIsVisible={props.isVisible} />
        </View>
    );
}
