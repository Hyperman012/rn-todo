import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { EditableCard } from './Card.tsx';

export function AddModal(props: { isVisible: boolean; setIsVisible: (value: boolean) => void }) {
    const [newTodo, setNewTodo] = useState('');

    function closeModal() {
        props.setIsVisible(false);
    }

    return (
        <Modal visible={props.isVisible}>
            <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <AddModalButton text={'Close'} onPress={closeModal} />
                <AddModalButton text={'Save'} onPress={closeModal} />
            </View>
            <EditableCard text={newTodo} onChangeText={setNewTodo} />
        </Modal>
    );
}

function AddModalButton(props: { onPress: () => void; text: string }) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#282c34',
        borderWidth: 1,
        backgroundColor: '#282c34',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
