import 'react-native';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import React from 'react';
import { AppHeader, appName } from '../AppHeader.tsx';

describe('app header.test', () => {
    it('renders name', () => {
        const header = render(<AppHeader setIsVisible={() => {}} />);
        header.getByText(appName);
    });
    it('renders buttons', () => {
        const header = render(<AppHeader setIsVisible={() => {}} />);
        header.getByText('Add');
        header.getByText('Clear All');
    });
});
