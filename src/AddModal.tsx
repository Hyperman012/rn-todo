import { Modal, Pressable, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

export function AddModal() {
    const [newTodo, setNewTodo] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    return (
        <Modal visible={isVisible}>
            <Pressable onPress={() => setIsVisible(false)}>
                <Text>Close</Text>
            </Pressable>
            <TextInput placeholder={'Enter To-Do'} onChangeText={setNewTodo} value={newTodo} />
        </Modal>
    );
}
