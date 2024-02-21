import { Modal, Pressable, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

export function AddModal(props: { isVisible: boolean; setIsVisible: (value: boolean) => void }) {
    const [newTodo, setNewTodo] = useState('');
    return (
        <Modal visible={props.isVisible}>
            <Pressable onPress={() => props.setIsVisible(false)}>
                <Text>Close</Text>
            </Pressable>
            <Pressable onPress={() => props.setIsVisible(false)}>
                <Text>Save</Text>
            </Pressable>
            <TextInput placeholder={'Enter To-Do'} onChangeText={setNewTodo} value={newTodo} />
        </Modal>
    );
}
