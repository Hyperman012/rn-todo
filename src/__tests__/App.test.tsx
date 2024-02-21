import 'react-native';
import React from 'react';
import App from '../App.tsx';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { appName } from '../AppHeader.tsx';

describe('App', () => {
    it('renders correctly', () => {
        render(<App />);
    });

    it('renders header', () => {
        const screen = render(<App />);
        screen.getByText(appName);
    });
});
