import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { OurModal } from './OurModal.tsx';
import { EditableCard } from './todoCard/EditableTodoCard.tsx';

export function AddModal(props: { isVisible: boolean; setIsVisible: (value: boolean) => void }) {
    const [newTodo, setNewTodo] = useState('');

    function closeModal() {
        props.setIsVisible(false);
    }

    return (
        <OurModal style={styles.container} isVisible={props.isVisible} setIsVisible={props.setIsVisible}>
            <View style={styles.buttonContainer}>
                <AddModalButton text={'Close'} onPress={closeModal} />
                <AddModalButton text={'Save'} onPress={closeModal} />
            </View>
            <EditableCard text={newTodo} onChangeText={setNewTodo} />
        </OurModal>
    );
}

function AddModalButton(props: { onPress: () => void; text: string }) {
    return (
        <Pressable style={buttonStyles.container} onPress={props.onPress}>
            <Text style={buttonStyles.text}>{props.text}</Text>
        </Pressable>
    );
}

export const styles = StyleSheet.create({
    container: {
        gap: 10,
        padding: 10,
    },
    buttonContainer: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const buttonStyles = StyleSheet.create({
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
