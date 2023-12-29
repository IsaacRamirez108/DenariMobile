import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";

const PropertyManagerInfo = () => {

    const [Individual_Company, setIndividual_Company] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomInputs
                    placeHolder={'Individual Or Company'}
                    value={Individual_Company}
                    setValue={setIndividual_Company}
                />
                <CustomInputs
                    placeHolder={'Name'}
                    value={name}
                    setValue={setName}
                />
                <CustomInputs
                    placeHolder={'Contact'}
                    value={contact}
                    setValue={setContact}
                />
                <CustomInputs
                    placeHolder={'company Email'}
                    value={companyEmail}
                    setValue={setCompanyEmail}
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
