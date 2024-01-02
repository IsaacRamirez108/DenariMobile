import React, {useState} from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from "react-native";

const CustomDropDown = ({ placeholder, items, onValueChange }) => {

    return(
        <View style={styles.content}>

            <Text style={styles.placeholder}>{placeholder}</Text>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={items}
                // placeholder={{ label: placeholder, value: null }}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                    // placeholder: { color: 'white' }, // Change placeholder color here
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
    },
    placeholder: {
        color: 'white',
        marginTop: 5,
        paddingLeft: 20,
    },
});

export default CustomDropDown;
