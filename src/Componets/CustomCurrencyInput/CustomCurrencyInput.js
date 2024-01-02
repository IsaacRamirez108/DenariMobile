import React from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

function CustomCurrencyInput({placeHolder, mask}) {
    return (
        <ScrollView>

            <Text style={styles.placeholder}>{placeHolder}</Text>
            <MaskedTextInput
                type="currency"
                options={{
                    prefix: '$',
                    decimalSeparator: '.',
                    groupSeparator: ',',
                    precision: 2
                }}
                onChangeText={(text, rawText) => {
                    console.log(text);
                    console.log(rawText);
                }}
                style={styles.input}
                keyboardType="numeric"
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
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

export default CustomCurrencyInput;
