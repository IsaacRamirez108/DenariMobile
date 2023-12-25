import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInputs = ({value, setValue, placeHolder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeHolder}
                placeholderTextColor="#fff"
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15, // Add padding to match screen padding if needed
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

export default CustomInputs;
