import { StyleSheet, Text, View } from 'react-native';
import { TodoButtons } from './TodoButtons.tsx';
import React from 'react';

export const appName = 'DoCue';

export function AppHeader(props: { setIsVisible: (value: boolean) => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{appName}</Text>
            <Text style={styles.subtitle}>Your Cue for To-Dos</Text>
            <TodoButtons setIsVisible={props.setIsVisible} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#f7f7f7', alignItems: 'center', margin: 10 },
    title: { fontSize: 22, fontWeight: 'bold' },
    subtitle: { fontStyle: 'italic' },
});
