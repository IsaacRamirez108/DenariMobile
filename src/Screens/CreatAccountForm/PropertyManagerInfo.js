import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import CustomDropDown from "../../Componets/CustomDropDown";
import {SelectList} from "react-native-dropdown-select-list";
import CustomMaskedInput from "../../Componets/CustomMaskedInput/CustomMaskedInput";

const PropertyManagerInfo = () => {

    const [Individual_Company, setIndividual_Company] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [propertyManagerEmail, setPropertyManagerEmail] = useState('');

    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: 'Individual', value: '1' },
        { label:  'Company', value: '2' },
    ];

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomDropDown
                    placeholder="Individual or Company?"
                    items={items}
                    onValueChange={(value) => setSelectedValue(value)}
                    value={Individual_Company}
                    setValue={setIndividual_Company}
                />

                <CustomInputs
                    placeHolder={'Property Manager Name'}
                    value={name}
                    setValue={setName}
                />

                <CustomMaskedInput
                    placeHolder={'Property Manager Number'}
                    mask={'(999)999-9999'}
                    value={contact}
                    setValue={setContact}
                />

                <CustomInputs
                    placeHolder={'Property Manager Email'}
                    value={propertyManagerEmail}
                    setValue={setPropertyManagerEmail}
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
