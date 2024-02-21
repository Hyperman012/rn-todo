import { Modal, TextInput } from 'react-native';
import React from 'react';

export function AddModal() {
    return (
        <Modal>
            <TextInput placeholder={'Enter To-Do'} />
        </Modal>
    );
}
