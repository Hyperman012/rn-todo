import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppHeader } from './AppHeader.tsx';
import { TodoCards } from './TodoCards.tsx';
import { AddModal } from './AddModal.tsx';

function useIsDarkMode() {
    return useColorScheme() === 'dark';
}

export default function App(): React.JSX.Element {
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    const isDarkMode = useIsDarkMode();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : 'white',
    };

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1, gap: 20 }]}>
            <AddModal isVisible={isAddModalVisible} setIsVisible={setIsAddModalVisible} />
            <Pressable>
                <Text>Add</Text>
            </Pressable>
            <AppHeader />
            <TodoCards />
        </SafeAreaView>
    );
}
