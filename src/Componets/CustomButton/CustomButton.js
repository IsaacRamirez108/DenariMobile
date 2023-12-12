import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButtons = ({ onPress, text }) => {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 18,
        marginVertical: 10,
        alignItems: 'center',

        borderWidth: 1,
        borderRadius: 30,
    },
    text:{
        color: 'White',
    },
});

export default CustomButtons;
