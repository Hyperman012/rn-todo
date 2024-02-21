import React, { PropsWithChildren } from 'react';
import { Modal, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export function OurModal(
    props: PropsWithChildren<{
        isVisible: boolean;
        setIsVisible: (value: boolean) => void;
        style?: StyleProp<ViewStyle>;
    }>,
) {
    return (
        <Modal transparent={true} visible={props.isVisible}>
            <View style={styles.background}>
                <View style={[styles.position]}>
                    <View style={[styles.container, props.style]}>{props.children}</View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#121227d9',
    },
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    position: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
