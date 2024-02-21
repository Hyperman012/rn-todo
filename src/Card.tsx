import { ImageBackground, Pressable, Text, TextInput, View } from 'react-native';
import { Todo } from './Todo.tsx';
import React, { PropsWithChildren } from 'react';

export function Card(props: { todo: Todo }) {
    return (
        <TodoPostIt>
            <View style={{ flex: 1, paddingVertical: 10, gap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <DeleteTodoButton />
                </View>
                <Text>{props.todo.title}</Text>
            </View>
        </TodoPostIt>
    );
}

function DeleteTodoButton() {
    return (
        <Pressable>
            <Text style={{ fontWeight: 'bold' }}>x</Text>
        </Pressable>
    );
}

export function EditableCard(props: { onChangeText: (text: string) => void; text: string }) {
    return (
        <TodoPostIt>
            <TextInput placeholder={'Enter To-Do'} onChangeText={props.onChangeText} value={props.text} />
        </TodoPostIt>
    );
}

function TodoPostIt(props: PropsWithChildren) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
                style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}
                source={require('./assets/todo.png')}>
                {props.children}
            </ImageBackground>
        </View>
    );
}
