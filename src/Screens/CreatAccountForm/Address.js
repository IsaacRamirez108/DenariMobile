import React, {useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CustomInputs from "../../Componets/CustomInput";

const Address = () => {

    const [street, setStreet] = useState('');
    const [aptNumber, setAptNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    return (
        <View style={styles.content}>
            <View style={styles.formContainer}>
                <CustomInputs
                    placeHolder={'Street'}
                    value={street}
                    setValue={setStreet}
                />
                <CustomInputs
                    placeHolder={'Apartment Number'}
                    value={aptNumber}
                    setValue={setAptNumber}
                />
                <CustomInputs
                    placeHolder={'City'}
                    value={city}
                    setValue={setCity}
                />

                <View style={styles.rowContainer}>
                    <View style={styles.halfWidthInput}>
                        <CustomInputs
                            placeHolder={'State'}
                            value={state}
                            setValue={setState}
                        />
                    </View>
                    <View style={styles.halfWidthInput}>
                        <CustomInputs
                            placeHolder={'Zip Code'}
                            value={zipCode}
                            setValue={setZipCode}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
    text: {
        color: "white",
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    halfWidthInput: {
        width: '50%',
    },
});

export default Address;
