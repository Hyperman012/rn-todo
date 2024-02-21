import { Modal, TextInput } from 'react-native';
import React, { useState } from 'react';

export function AddModal() {
    const [newTodo, setNewTodo] = useState('');
    return (
        <Modal>
            <TextInput placeholder={'Enter To-Do'} onChangeText={setNewTodo} value={newTodo} />
        </Modal>
    );
}
