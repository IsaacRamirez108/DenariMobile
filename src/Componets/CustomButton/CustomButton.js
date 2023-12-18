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
        marginVertical: 7,
        alignItems: 'center',

        // borderWidth: 1,
        borderRadius: 30,
    },

    container_PRIMARY: {
        backgroundColor: '#4b93ec',
        // backgroundColor: '#3e88d3,
        // marginTop: '50%',
    },

    container_TERTIARY: {
        overlayColor: 'white',
    },

    container_SECONDARY: {
        overlayColor: 'white',
        borderWidth: 1,
    },

    text:{
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default CustomButtons;
