import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomButtons from "../../Componets/CustomButton";


const Personal = () => {

    const [SSN, setSSN] = useState('');
    const [DOB, setDOB] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>
                <CustomInputs
                    placeHolder={'Social Security Number'}
                    value={SSN}
                    setValue={setSSN} />

                <CustomInputs
                    placeHolder={'Date of Birth'}
                    value={DOB}
                    setValue={setDOB} />

                <CustomInputs
                    placeHolder={'Phone Number'}
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    secureTextEntry />
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
});

export default Personal;
