import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDatePicker from "../../Componets/CustomDatePicker";


const RentalData = () => {

    const [monthlyRent, setMonthlyRent] = useState('');
    const [moveInDate, setMoveInDate] = useState(new Date());
    const [moveOutDate, setMoveOutDate] = useState('');
    const [rentalPortal, setRentalPortal] = useState('');
    const [formPayment, setFormPayment] = useState('');


    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                <CustomDatePicker placeHolder={'Move In Date'}/>
                <CustomDatePicker placeHolder={'Move Out Date'}/>

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
        marginVertical: '50%',
        // backgroundColor: 'blue'
    },
    text: {
        color: "white",
    },
});
export default RentalData;

