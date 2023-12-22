import React, {useState} from 'react';
import { View, SafeAreaView, Pressable, Text, StyleSheet, Image } from 'react-native';
import Personal from "./Personal";
import Address from "./Address";
import PropertyManagerInfo from "./PropertyManagerInfo";
import RentalData from "./RentalData";
import CreateUser from "./CreateUser";

export default function Form() {
    const [formData, setFormData] = useState ({
        // User Data
        firstName: "",
        lastName: "",
        middleName: "",
        username: "",
        email: "",
        password: "",

        // Personal Data
        SSN: "",
        DOB: "",
        phoneNumber: "",

        //Address
        street: "",
        aptNumber: "",
        city: "",
        state: "",
        postalCode: "",

        // Property Management Info
        individual_company: "",
        name: "",
        contact: "",
        companyEmail: "",

        // Rental Data
        monthlyRent: "",
        moveInDate: "",
        moveOutDate: "",
        rentalPortal: "",
        formPayment: "",
    });

    const [screen, setScreen] = useState(0)
    const FormTitle = [
        "Creat Account",
        "Personal Info",
        "Address",
        "Property Management Info",
        "Rental Data",
    ];
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
    }
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{FormTitle[screen]}</Text>
            <View>{ScreenDisplay()}</View>

            <Pressable
                disabled={screen === 0}
                onPress={() => {
                setScreen((currScreen) => currScreen - 1)
            }} >
                <Text style={styles.text}>Prev</Text>
            </Pressable>

            <Pressable onPress={() => {
                setScreen((currScreen) => currScreen + 1)
            }} >
                <Text style={styles.text}>Next</Text>
            </Pressable>
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

