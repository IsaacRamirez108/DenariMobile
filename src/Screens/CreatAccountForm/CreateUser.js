// import React, {useState} from 'react';
// import {View, TouchableOpacity, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
// import logoImage from "../../assets/allWhiteLogoMain.png";
// import CustomInputs from "../../Componets/CustomInput";
// import CustomButtons from "../../Componets/CustomButton";
//
// const CreateUser = () => {
//
//     const [userName, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordRepeat, setPasswordRepeat] = useState('');
//
//     const onSignedInPressed = () => {
//         console.log("Signed In!");
//     }
//
//     const onForgotPasswordPressed = () => {
//         console.log("Forgot Password");
//     }
//
//     const SignInPressed = () => {
//         console.warn("SignInPressed");
//     }
//
//     return (
//
//
//         <View style={styles.root}>
//             <View style={styles.container}>
//                 <ScrollView contentContainerStyle={styles.content}>
//                     <View style={styles.formContainer}>
//                         <Text style={styles.title}>Creat Account</Text>
//
//                         <CustomInputs
//                             placeHolder={'Username'}
//                             value={userName}
//                             setValue={setUsername} />
//
//                         <CustomInputs
//                             placeHolder={'Email'}
//                             value={email}
//                             setValue={setEmail} />
//
//                         <CustomInputs
//                             placeHolder={'Password'}
//                             value={password}
//                             setValue={setPassword}
//                             secureTextEntry />
//
//                         <CustomInputs
//                             placeHolder={'Repeat Password'}
//                             value={passwordRepeat}
//                             setValue={setPasswordRepeat}
//                             secureTextEntry />
//                     </View>
//                 </ScrollView>
//
//                 {/*<View style={styles.buttonContainer}>*/}
//                 {/*    <CustomButtons text='Create Account' onPress={onSignedInPressed} type='PRIMARY'/>*/}
//                 {/*    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>*/}
//                 {/*        <Text style={styles.text}>Have an account? </Text>*/}
//                 {/*        <TouchableOpacity>*/}
//                 {/*            <Text style={styles.link} onPress={SignInPressed} >Sign In</Text>*/}
//                 {/*        </TouchableOpacity>*/}
//                 {/*    </View>*/}
//                 {/*</View>*/}
//
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//     },
//     content: {
//         flexGrow: 1,
//         paddingTop: 40,
//     },
//     formContainer: {
//         alignItems: 'center',
//         paddingBottom: 100, // Adjust this value to create space for the button
//     },
//     buttonContainer: {
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingBottom: 20, // Padding for the button
//         // You might need to adjust paddingBottom according to your button's height
//         // to ensure it doesn't overlap with content above
//     },
//     title: {
//         fontSize: 34,
//         fontWeight: 'bold',
//         color: 'white',
//         margin: 10,
//         marginVertical: 35,
//
//     },
//     text: {
//         color: 'white',
//         marginVertical: 10,
//     },
//     link: {
//         color: '#FDB075',
//     }
// });
//
// export default CreateUser;
//





import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const CreateUser = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>CreateUser</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center', // Center the image horizontally
        padding: 30, // Adjust top margin for the content
    },
    text: {
        color: "white",
    }
});

export default CreateUser;
