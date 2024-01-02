import {useState} from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View} from "react-native";

const CustomDropDown = ({ placeholder, items, onValueChange }) => {

    return(
        <View style={styles.content}>

            <RNPickerSelect
                onValueChange={onValueChange}
                items={items}
                placeholder={{ label: placeholder, value: null }}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                    placeholder: { color: 'white' }, // Change placeholder color here
                }}
            />

        </View>

    )
};

const styles = StyleSheet.create({
    content:{
        width: "100%",
        paddingHorizontal: 3,
    },
    input: {
        color: 'white',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        marginVertical: 7,
        borderWidth: 0,
        paddingHorizontal: 30
    }
});

export default CustomDropDown;
