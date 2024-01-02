import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomButtons from "../../Componets/CustomButton";
import {MaskedTextInput} from "react-native-mask-text";
import CustomMaskedInput from "../../Componets/CustomMaskedInput/CustomMaskedInput";
import CustomDatePicker from "../../Componets/CustomDatePicker";

const Personal = () => {

    const [SSN, setSSN] = useState('');
    const [DOB, setDOB] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomMaskedInput
                    placeHolder={'Social Security Number'}
                    mask={'999-99-9999'}
                />

                <CustomMaskedInput
                    placeHolder={'Date of Birth'}
                    mask={'99/99/9999'}
                />
                <CustomMaskedInput
                    placeHolder={'Phone Number'}
                    mask={'(999)999-9999'}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        width: '100%'
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
