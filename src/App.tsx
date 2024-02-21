import React, { useState } from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppHeader } from './AppHeader.tsx';
import { TodoCards } from './todoCard/TodoCards.tsx';
import { AddModal } from './AddModal.tsx';
import { TodoButtons } from './TodoButtons.tsx';

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
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
            <AddModal isVisible={isAddModalVisible} setIsVisible={setIsAddModalVisible} />
            <View style={{ flex: 1, gap: 20 }}>
                <View>
                    <AppHeader />
                    <TodoButtons isVisible={setIsAddModalVisible} />
                </View>
                <TodoCards />
            </View>
        </SafeAreaView>
    );
}
