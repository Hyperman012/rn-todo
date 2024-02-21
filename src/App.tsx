import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createMediaStyleSheet } from 'media-style-sheet';
import { Card } from './Card.tsx';

const MediaStyleSheet = createMediaStyleSheet({
    tablet: () => true,
    mobile: () => false,
});

function useIsDarkMode() {
    return useColorScheme() === 'dark';
}

export default function App(): React.JSX.Element {
    const isDarkMode = useIsDarkMode();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Card todo={{ title: 'Make List' }} />
        </SafeAreaView>
    );
}
