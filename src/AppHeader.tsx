import { Text, View } from 'react-native';

export const appName = 'DoCue';

export function AppHeader() {
    return (
        <View style={{ backgroundColor: '#f7f7f7', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{appName}</Text>
            <Text style={{ fontStyle: 'italic' }}>Your Cue for To-Dos</Text>
        </View>
    );
}
