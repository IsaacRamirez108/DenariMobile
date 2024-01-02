import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

function CustomMaskedInput({placeHolder, mask}) {
    return (
        <View style={styles.content}>

            <Text style={styles.placeholder}>{placeHolder}</Text>
            <MaskedTextInput
                mask={mask}
                onChangeText={(text, rawText) => {
                    console.log(text);
                    console.log(rawText);
                }}
                style={styles.input}
                keyboardType="numeric"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        width: "100%",
        paddingHorizontal: 3,
    },
    input: {
        color: '#fff',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        paddingHorizontal: 25,
        marginVertical: 7,
    },
    placeholder: {
        // fontSize: 13,
        color: 'white',
        marginTop: 5,
        paddingLeft: 20,
    },
});

export default CustomMaskedInput;
