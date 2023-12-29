import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDatePicker from "../../Componets/CustomDatePicker";
import CustomDropDown from "../../Componets/CustomDropDown";


const RentalData = () => {

    const [monthlyRent, setMonthlyRent] = useState('');
    const [moveInDate, setMoveInDate] = useState(new Date());
    const [moveOutDate, setMoveOutDate] = useState('');
    const [rentalPortal, setRentalPortal] = useState('');
    const [formPayment, setFormPayment] = useState('');


    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>

                {/*<CustomInputs*/}
                {/*    placeHolder={'monthlyRent'}*/}
                {/*    value={monthlyRent}*/}
                {/*    setValue={setMonthlyRent}*/}
                {/*/>*/}
                {/*<CustomInputs*/}
                {/*    placeHolder={'rentalPortal'}*/}
                {/*    value={rentalPortal}*/}
                {/*    setValue={setRentalPortal}*/}
                {/*/>*/}

                {/*<View style={styles.rowContainer}>*/}
                {/*    <View style={styles.halfWidthInput}>*/}
                {/*        <CustomDatePicker placeHolder={'Move In Date'}/>*/}
                {/*    </View>*/}
                {/*    <View style={styles.halfWidthInput}>*/}
                {/*        <CustomDatePicker placeHolder={'Move Out Date'}/>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<CustomDropDown />*/}

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
});
export default RentalData;

