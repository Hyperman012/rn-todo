import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppHeader } from './AppHeader.tsx';
import { TodoCards } from './todoCard/TodoCards.tsx';
import { AddModal } from './AddModal.tsx';
import { TodoProvider } from './TodoProvider.tsx';
import { useIsDarkMode } from './stylesheet.tsx';

export default function App(): React.JSX.Element {
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    const isDarkMode = useIsDarkMode();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : 'white',
    };

    return (
        <SafeAreaView style={[backgroundStyle, styles.appContainer]}>
            <TodoProvider>
                <AddModal isVisible={isAddModalVisible} setIsVisible={setIsAddModalVisible} />
                <View style={styles.mainPageContainer}>
                    <AppHeader setIsVisible={setIsAddModalVisible} />
                    <TodoCards />
                </View>
            </TodoProvider>
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
