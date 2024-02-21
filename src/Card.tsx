import { ImageBackground, Text, TextInput, View } from 'react-native';
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

export function EditableCard(props: { onChangeText: (text: string) => void; text: string }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}
                source={require('./assets/todo.png')}>
                <TextInput placeholder={'Enter To-Do'} onChangeText={props.onChangeText} value={props.text} />
            </ImageBackground>
        </View>
    );
}
