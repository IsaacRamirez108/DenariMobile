import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native'
import CustomInputs from "../Componets/CustomInput/CustomInputs";
import CustomButtons from "../Componets/CustomButton";

const logoImage = require('../assets/allWhiteLogoMain.png');

const SignInScreen = () => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignedInPressed = () => {
        console.log("Signed In!");
    }

    const onForgotPasswordPressed = () => {
        console.log("Forgot Password");
    }

    return (
        <ScrollView>
            <View style={styles.content}>

                <Image source={logoImage}
                       style={[styles.logo, {height: height * 0.3}]}
                       resizeMode="contain" />

                <CustomInputs
                    placeHolder={'Username'}
                    value={userName}
                    setValue={setUsername} />

                <CustomInputs
                    placeHolder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry />

                <CustomButtons text='Sign In' onPress={onSignedInPressed}/>
                <CustomButtons text='Forgot Password?' onPress={onForgotPasswordPressed} type='TERTIARY' />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center', // Center the image horizontally
        padding: 40, // Adjust top margin for the content
        marginTop: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;
