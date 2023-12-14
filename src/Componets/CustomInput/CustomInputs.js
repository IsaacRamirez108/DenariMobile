import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInputs = ({value, setValue, placeHolder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeHolder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input:{
        backgroundColor: 'white',
        height: 55,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 30,

        paddingHorizontal: 25,
        // marginVertical: 15,
        marginTop: 10,
    },
});

export default CustomInputs;
