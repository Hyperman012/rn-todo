import React, { PropsWithChildren } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export function TodoPostIt(props: PropsWithChildren) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../assets/todo.png')}>
                {props.children}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' },
    imageBackground: { height: 130, width: 130, alignItems: 'center', justifyContent: 'center' },
});
