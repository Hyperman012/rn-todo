import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

export function AddTodo(props: { setIsVisible: (value: boolean) => void }) {
    return (
        <Pressable style={styles.container} onPress={() => props.setIsVisible(true)}>
            <Text style={styles.text}>Add</Text>
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
