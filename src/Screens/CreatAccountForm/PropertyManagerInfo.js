import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomDropDown from "../../Componets/CustomDropDown";

const PropertyManagerInfo = () => {

    const [Individual_Company, setIndividual_Company] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomDropDown
                    placeHolder={'Individual Or Company'}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        width: '100%',
    },
    formContainer: {
        width: '100%',
    },
    text: {
        color: "white",
    },
});

export default PropertyManagerInfo;
