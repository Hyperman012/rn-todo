import DeviceInfo from 'react-native-device-info';

export function isMobile(): boolean {
    return !isTablet();
}

const deviceIsTablet = DeviceInfo.isTablet();

export function isTablet(): boolean {
    return deviceIsTablet;
}
