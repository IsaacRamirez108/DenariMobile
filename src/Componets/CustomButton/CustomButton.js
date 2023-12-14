import React from 'react'
import { View, Text, StyleSheet, Pressable, } from 'react-native'

const CustomButtons = ({ onPress, text, type = "PRIMARY" }) => {
    return(
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}> {text} </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 18,
        marginVertical: 5,
        alignItems: 'center',

        // borderWidth: 1,
        borderRadius: 30,
    },

    container_PRIMARY: {
        backgroundColor: 'blue',
        marginTop: '50%',
    },

    container_TERTIARY: {
        overlayColor: 'blue'
    },

    text:{
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default CustomButtons;
