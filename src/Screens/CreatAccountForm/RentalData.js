import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image, TextInput} from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AmountInput} from 'react-native-amount-input';
import CustomDatePicker from "../../Componets/CustomDatePicker";
import CustomDropDown from "../../Componets/CustomDropDown";
import {Input} from "react-native-elements";
import CustomMaskedInput from "../../Componets/CustomMaskedInput/CustomMaskedInput";


const RentalData = () => {

    const [monthlyRent, setMonthlyRent] = useState('');
    const [moveInDate, setMoveInDate] = useState(new Date());
    const [moveOutDate, setMoveOutDate] = useState('');
    const [rentalPortal, setRentalPortal] = useState('');
    const [formPayment, setFormPayment] = useState('');

    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: '1', value: 'Individual' },
        { label:  '2', value: 'Company' },
    ];

    // const [value, setValue] = React.useState(2310.458);


    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomMaskedInput

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
        // backgroundColor: 'blue'
    },
    rowContainer: {
        flexDirection: 'row',
    },
    halfWidthInput: {
        width: '50%',
    },
    text: {
        color: "white",
    },
    input:{
        color: '#fff',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        paddingHorizontal: 25,
        marginVertical: 7,
    },
});
export default RentalData;

