import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import logoImage from "../../assets/allWhiteLogoMain.png";
import CustomInputs from "../../Componets/CustomInput";
import CustomButtons from "../../Componets/CustomButton";

const CreatAccount = () => {

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

    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Creat Account</Text>
                        {/*<Image source={logoImage}*/}
                        {/*       style={[styles.logo, {height: height * 0.3}]}*/}
                        {/*       resizeMode="contain" />*/}

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

                        <View style={styles.buttonContainer}>
                            <CustomButtons text='Create Account' onPress={onSignedInPressed} type='PRIMARY'/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center', // Center the image horizontally
        padding: 40, // Adjust top margin for the content
        marginTop: 20,
    },
    buttonContainer:{
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
});

export default CreatAccount;
