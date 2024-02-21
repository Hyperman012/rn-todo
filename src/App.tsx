import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppHeader } from './AppHeader.tsx';
import { TodoCards } from './todoCard/TodoCards.tsx';
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
        <SafeAreaView style={[backgroundStyle, styles.appContainer]}>
            <AddModal isVisible={isAddModalVisible} setIsVisible={setIsAddModalVisible} />
            <View style={styles.mainPageContainer}>
                <AppHeader setIsVisible={setIsAddModalVisible} />
                <TodoCards />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    mainPageContainer: {
        flex: 1,
        gap: 20,
    },
});
