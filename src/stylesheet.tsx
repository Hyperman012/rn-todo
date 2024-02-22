import { useColorScheme } from 'react-native';
import { createMediaStyleSheet } from 'media-style-sheet';
import { isMobile, isTablet } from './environment.tsx';

export function useIsDarkMode() {
    return useColorScheme() === 'dark';
}

export const MediaStyleSheet = createMediaStyleSheet({
    tablet: isTablet,
    mobile: isMobile,
});
