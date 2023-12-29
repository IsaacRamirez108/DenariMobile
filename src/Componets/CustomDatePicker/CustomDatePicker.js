import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

export default function CustomDatePicker({ placeHolder }) {

    // State to manage the visibility of the date picker modal and selected date
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState('');

    const today = new Date();

    // Set the start date to 365 days (1 year) ago
    const startDate = getFormatedDate(today.setDate(today.getDate() - 365), 'MM/DD/YYYY');

    // Function to handle the selection of a date
    const handleChangeStartDate = (date) => {
        setSelectedStartDate(date);
        setOpenStartDatePicker(false); // Close the date picker after selection
    };

    // Function to toggle the visibility of the date picker modal
    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                style={{
                    width: '100%',
                }} >

                <View style={styles.containerTwo}>
                    <View>
                        <TouchableOpacity style={styles.inputBtn} onPress={handleOnPressStartDate}>
                            <Text style={styles.text}>{selectedStartDate || placeHolder}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={openStartDatePicker}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePicker
                                mode="calendar"
                                minimumDate={startDate}
                                selected={selectedStartDate}
                                onDateChanged={handleChangeStartDate}
                                onSelectedChange={(date) => setSelectedStartDate(date)}
                                options={{
                                    backgroundColor: "#080516",
                                    textHeaderColor: "#469ab6",
                                    textDefaultColor: "#FFFFFF",
                                    selectedTextColor: "#FFF",
                                    mainColor: "#469ab6",
                                    textSecondaryColor: "#FFFFFF",
                                    borderColor: "rgba(122, 146, 165, 0.1)",
                                }}
                            />
                            <TouchableOpacity onPress={handleOnPressStartDate}>
                                <Text style={styles.text}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTwo:{
        width: "100%",
        paddingHorizontal: 15,
    },
    inputBtn: {
        color: '#fff',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        paddingHorizontal: 25,
        marginVertical: 7,
        justifyContent: "center",
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#080516",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 35,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        color: 'white',
    }
});
