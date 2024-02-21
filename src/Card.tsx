import { ImageBackground, Text, View } from 'react-native';
import { Todo } from './Todo.tsx';
import React from 'react';

export function Card(props: { todo: Todo }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}
                source={require('./assets/todo.png')}>
                <Text>{props.todo.title}</Text>
            </ImageBackground>
        </View>
    );
}
