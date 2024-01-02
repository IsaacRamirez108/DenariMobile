import React from 'react';
import {ScrollView, StyleSheet} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

function CustomMaskedInput({placeHolder}) {
    return (
        <ScrollView>

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


            <MaskedTextInput
                mask="(999)-999-9999"
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
});

export default CustomMaskedInput;
