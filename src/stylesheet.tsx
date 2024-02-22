import { useColorScheme } from 'react-native';

export function useIsDarkMode() {
    return useColorScheme() === 'dark';
}
