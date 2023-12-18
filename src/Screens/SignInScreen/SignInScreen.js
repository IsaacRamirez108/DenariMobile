import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native'
import CustomInputs from "../../Componets/CustomInput/CustomInputs";
import CustomButtons from "../../Componets/CustomButton";

const logoImage = require('../../assets/allWhiteLogoMain.png');

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

                <View style={styles.inputSection}>
                    <CustomInputs
                        placeHolder={'Username'}
                        value={userName}
                        setValue={setUsername} />

                    <CustomInputs
                        placeHolder={'Password'}
                        value={password}
                        setValue={setPassword}
                        secureTextEntry />

                    {/*Forgot Password link*/}
                    <TouchableOpacity>
                        <Text style={{ color: 'white', marginVertical: 20}}>Forgot Password?</Text>
                    </TouchableOpacity>

                    {/*Sign In Button*/}
                    <CustomButtons text='Sign In' onPress={onSignedInPressed}/>

                    {/*Create an Account link*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ color: 'white' }}>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#4b93ec',}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*This section is the 'OR' line that separates the signIn section to the create an account button */}
                {/*<View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>*/}
                {/*    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />*/}
                {/*    <View>*/}
                {/*        <Text style={{width: 50, color: 'white', textAlign: 'center'}}>OR</Text>*/}
                {/*    </View>*/}
                {/*    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />*/}
                {/*</View>*/}

                {/*<CustomButtons text='Create Account' onPress={onSignedInPressed} type='SECONDARY'/>*/}

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center', // Center the image horizontally
        padding: 30, // Adjust top margin for the content
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    inputSection: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 30
    }
});

export default SignInScreen;
