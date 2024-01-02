import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomInputs = ({ value, setValue, placeHolder, secureTextEntry }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.placeholder}>{placeHolder}</Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholderTextColor="#fff"
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    input: {
        color: '#fff',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginVertical: 7,
    },
    placeholder: {
        // fontSize: 16,
        color: 'white',
        marginTop: 5,
        paddingLeft: 20,
    },
});

export default CustomInputs;
