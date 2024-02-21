import { TextInput } from 'react-native';
import React from 'react';

import { TodoPostIt } from './TodoPostIt.tsx';

export function EditableCard(props: { onChangeText: (text: string) => void; text: string }) {
    return (
        <TodoPostIt>
            <TextInput placeholder={'Enter To-Do'} onChangeText={props.onChangeText} value={props.text} />
        </TodoPostIt>
    );
}
