// import React, {useState} from 'react';
// import { View, SafeAreaView, Pressable, Text, StyleSheet, Image } from 'react-native';
// import Personal from "./Personal";
// import Address from "./Address";
// import PropertyManagerInfo from "./PropertyManagerInfo";
// import RentalData from "./RentalData";
// import CreateUser from "./CreateUser";
//
// export default function Form() {
//     const [formData, setFormData] = useState ({
//         // User Data
//         firstName: "",
//         lastName: "",
//         middleName: "",
//         username: "",
//         email: "",
//         password: "",
//
//         // Personal Data
//         SSN: "",
//         DOB: "",
//         phoneNumber: "",
//
//         //Address
//         street: "",
//         aptNumber: "",
//         city: "",
//         state: "",
//         postalCode: "",
//
//         // Property Management Info
//         individual_company: "",
//         name: "",
//         contact: "",
//         companyEmail: "",
//
//         // Rental Data
//         monthlyRent: "",
//         moveInDate: "",
//         moveOutDate: "",
//         rentalPortal: "",
//         formPayment: "",
//     });
//
//     const [screen, setScreen] = useState(0)
//     const FormTitle = [
//         "Creat Account",
//         "Personal Info",
//         "Address",
//         "Property Management Info",
//         "Rental Data",
//     ];
//     const ScreenDisplay = () => {
//         if (screen === 0){
//             return <CreateUser/>;
//         } else if (screen === 1){
//             return <Personal/>;
//         } else if (screen === 2){
//             return <Address/>;
//         } else if (screen === 3){
//             return <RentalData/>;
//         } else {
//             return <PropertyManagerInfo/>
//         }
//     }
//     return (
//         <View style={styles.content}>
//             <Text style={styles.text}>{FormTitle[screen]}</Text>
//             <View>{ScreenDisplay()}</View>
//
//             <Pressable
//                 disabled={screen === 0}
//                 onPress={() => {
//                 setScreen((currScreen) => currScreen - 1)
//             }} >
//                 <Text style={styles.text}>Prev</Text>
//             </Pressable>
//
//             <Pressable onPress={() => {
//                 setScreen((currScreen) => currScreen + 1)
//             }} >
//                 <Text style={styles.text}>Next</Text>
//             </Pressable>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     content: {
//         alignItems: 'center', // Center the image horizontally
//         padding: 30, // Adjust top margin for the content
//     },
//     text: {
//         color: "white",
//     }
// });



import React, { useState } from 'react';
import {View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButtons from "../../Componets/CustomButton";
import Personal from "./Personal";
import Address from "./Address";
import PropertyManagerInfo from "./PropertyManagerInfo";
import RentalData from "./RentalData";
import CreateUser from "./CreateUser";
import { Icon } from 'react-native-elements'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Form() {

    const SignInPressed = () => {
        console.warn("SignInPressed");
    }

    const [screen, setScreen] = useState(0);
    const FormTitle = [
        "Create Account",
        "Personal Info",
        "Address",
        "Rental Data",
        "Land Lord Info"
    ];

    const handleNext = () => {
        setScreen((currentScreen) => Math.min(currentScreen + 1, FormTitle.length - 1));
    };

    const handlePrev = () => {
        setScreen((currentScreen) => Math.max(currentScreen - 1, 0));
    };

    const ScreenDisplay = () => {
        if (screen === 0){
            return <CreateUser/>;
        } else if (screen === 1){
            return <Personal/>;
        } else if (screen === 2){
            return <Address/>;
        } else if (screen === 3){
            return <RentalData/>;
        } else {
            return <PropertyManagerInfo/>
        }
    };

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                {screen !== 0 && (
                    <Pressable onPress={handlePrev}>
                        <Icon
                            name='chevron-left'
                            type='font-awesome'
                            color='white'
                            size={30}
                            style={styles.prevButton}
                        />
                    </Pressable>
                )}
            </View>

            <Text style={styles.title}>{FormTitle[screen]}</Text>

            <View style={styles.content}>{ScreenDisplay()}</View>

            <CustomButtons text='Continue' onPress={handleNext} type='PRIMARY'/>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <Text style={styles.text}>Have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={SignInPressed} >Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    prevButton: {
        color: 'white',
    },
    content: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
    },
    text: {
        color: 'white',
    },
    link: {
        color: '#FDB075',
    }
});
