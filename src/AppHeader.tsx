import { StyleSheet, Text, View } from 'react-native';

export const appName = 'DoCue';

export function AppHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{appName}</Text>
            <Text style={styles.subtitle}>Your Cue for To-Dos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#f7f7f7', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold' },
    subtitle: { fontStyle: 'italic' },
});
