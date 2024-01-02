import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomButtons from "../../Componets/CustomButton";
import {MaskedTextInput} from "react-native-mask-text";

const Personal = () => {

    const [SSN, setSSN] = useState('');
    const [DOB, setDOB] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>
                {/*<CustomInputs*/}
                {/*    placeHolder={'Social Security Number'}*/}
                {/*    value={SSN}*/}
                {/*    setValue={setSSN} />*/}

                <Text style={styles.placeholder}>Enter Phone Number</Text>
                <MaskedTextInput
                    mask="(999)-999-9999"
                    onChangeText={(text, rawText) => {
                        console.log(text);
                        console.log(rawText);
                    }}
                    style={styles.maskedInput}
                    keyboardType="numeric"
                />

                {/*<CustomInputs*/}
                {/*    placeHolder={'Date of Birth'}*/}
                {/*    value={DOB}*/}
                {/*    setValue={setDOB} />*/}

                {/*<CustomInputs*/}
                {/*    placeHolder={'Phone Number'}*/}
                {/*    value={phoneNumber}*/}
                {/*    setValue={setPhoneNumber}*/}
                {/*    secureTextEntry />*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
    text: {
        color: "white",
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    maskedInput: {
        width: '100%',
        color: '#fff',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        paddingHorizontal: 25,
        marginVertical: 7,
    },
});

export default Personal;
