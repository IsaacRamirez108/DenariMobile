import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomButtons from "../../Componets/CustomButton";

const CreateUser = () => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSignedInPressed = () => {
        console.log("Signed In!");
    }

    const onForgotPasswordPressed = () => {
        console.log("Forgot Password");
    }

    const SignInPressed = () => {
        console.warn("SignInPressed");
    }

    return (

        <View style={styles.content}>
            <View style={styles.formContainer}>
                <CustomInputs
                    placeHolder={'Username'}
                    value={userName}
                    setValue={setUsername} />

                <CustomInputs
                    placeHolder={'Email'}
                    value={email}
                    setValue={setEmail} />

                 <CustomInputs
                     placeHolder={'Password'}
                     value={password}
                     setValue={setPassword}
                     secureTextEntry />

                <CustomInputs
                    placeHolder={'Repeat Password'}
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
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

export default CreateUser;
