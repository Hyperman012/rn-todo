import { View } from 'react-native';
import { Card } from './Card.tsx';
import React from 'react';

export function TodoCards() {
    return (
        <View>
            <Card todo={{ title: 'Make List' }} />
        </View>
    );
}
