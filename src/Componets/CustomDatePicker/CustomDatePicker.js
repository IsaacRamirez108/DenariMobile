// import { useState, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
// import Constants from "expo-constants";
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Platform,
//     SafeAreaView,
//     ScrollView,
//     TouchableOpacity,
//     KeyboardAvoidingView,
//     Pressable,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import CustomInputs from "../../Componets/CustomInput";
//
// const CustomDatePicker = ({value, setValue, placeHolder, secureTextEntry}) => {
//     // const [fullName, setFullName] = useState("");
//     // const [email, setEmail] = useState("");
//     const [dateOfBirth, setDateOfBirth] = useState("");
//
//     const [formReady, setFormReady] = useState(false);
//
//     const [date, setDate] = useState(new Date());
//     const [showPicker, setShowPicker] = useState(false);
//
//     const toggleDatepicker = () => {
//         setShowPicker(!showPicker);
//     };
//
//     const onChange = ({ type }, selectedDate) => {
//         if (type === "set") {
//             const currentDate = selectedDate;
//             setDate(currentDate);
//
//             if (Platform.OS === "android") {
//                 toggleDatepicker();
//                 setDateOfBirth(currentDate.toDateString());
//             }
//         } else {
//             toggleDatepicker();
//         }
//     };
//
//     const confirmIOSDate = () => {
//         setDateOfBirth(date.toDateString());
//         toggleDatepicker();
//     };
//
//     // const formatDate = (rawDate) => {
//     //     let date = new Date(rawDate);
//     //
//     //     let year = date.getFullYear();
//     //     let month = date.getMonth() + 1;
//     //     let day = date.getDate();
//     //
//     //     month = month < 10 ? `0${month}` : month;
//     //     day = day < 10 ? `0${day}` : day;
//     //
//     //     return `${day}-${month}-${year}`;
//     // };
//
//     const onSubmit = () => {
//         alert(`${fullName} ${email} ${dateOfBirth}`);
//     };
//
//     return (
//         <SafeAreaView style={styles.container}>
//             <KeyboardAvoidingView
//                 style={{ flex: 1 }}
//                 behavior={Platform.OS === "ios" ? "padding" : "height"}
//                 keyboardVerticalOffset={10}
//             >
//                 <ScrollView
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={styles.contentContainer}
//                 >
//
//                     <View>
//                         <Text style={styles.label}>Date Of Birth</Text>
//                         {showPicker && (
//                             <DateTimePicker
//                                 mode="date"
//                                 display="spinner"
//                                 value={date}
//                                 onChange={onChange}
//                                 textColor="#fff" // Adjust the text color to white
//                                 style={styles.datePicker}
//                             />
//                         )}
//
//                         {showPicker && Platform.OS === "ios" && (
//                             <View
//                                 style={{ flexDirection: "row", justifyContent: "space-around" }}
//                             >
//                                 <TouchableOpacity
//                                     style={[
//                                         styles.button,
//                                         styles.pickerButton,
//                                         { backgroundColor: "#11182711" },
//                                     ]}
//                                     onPress={toggleDatepicker}
//                                 >
//                                     <Text style={[styles.buttonText, { color: "#075985" }]}>
//                                         Cancel
//                                     </Text>
//                                 </TouchableOpacity>
//
//                                 <TouchableOpacity
//                                     style={[styles.button, styles.pickerButton]}
//                                     onPress={confirmIOSDate}
//                                 >
//                                     <Text style={[styles.buttonText]}>Confirm</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         )}
//
//                         {!showPicker && (
//                             <Pressable onPress={toggleDatepicker}>
//                                 <TextInput
//                                     style={styles.input} // Add styles.datePickerInput
//                                     placeholder={placeHolder}
//                                     value={dateOfBirth}
//                                     onChangeText={setDateOfBirth}
//                                     placeholderTextColor="white"
//                                     editable={false}
//                                     onPressIn={toggleDatepicker}
//                                 />
//                             </Pressable>
//                         )}
//                     </View>
//
//                     <StatusBar style="auto" />
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: "#f9fafb",
//     },
//     contentContainer: {
//         padding: 20,
//         paddingTop: Platform.OS === "android" ? Constants.statusBarHeight + 50 : 50,
//         color: 'white'
//     },
//     moto: {
//         fontWeight: "400",
//         fontSize: 15,
//         marginBottom: 35,
//         textAlign: "center",
//         // color: "#111827cc",
//         color: "blue",
//     },
//     label: {
//         fontSize: 13,
//         fontWeight: "500",
//         marginBottom: 10,
//         // color: "#111827cc",
//         color: 'white',
//     },
//     input: {
//         width: '100%',
//         color: '#fff',
//         backgroundColor: '#1d2738',
//         height: 55,
//         borderRadius: 30,
//         paddingHorizontal: 25,
//         marginVertical: 7,
//     },
//     button: {
//         height: 50,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         marginTop: 10,
//         marginBottom: 15,
//         backgroundColor: "#075985",
//         color: 'white'
//     },
//     buttonText: {
//         fontSize: 14,
//         fontWeight: "500",
//         color: "#fff",
//     },
//     datePicker: {
//         height: 120,
//         marginTop: -10,
//     },
//     pickerButton: {
//         paddingHorizontal: 20,
//         color: 'white'
//     },
//
// });
//
// export default CustomDatePicker;
//



//
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Button, View, Text } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { useState } from "react";
//
// export default function CustomDatePicker(placeHolder,) {
//     const [date, setDate] = useState(new Date());
//
//     const onChange = (e, selectedDate) => {
//         setDate(selectedDate);
//     };
//
//     return (
//         <View style={styles.container}>
//             <DateTimePicker
//                 value={date}
//                 mode={"date"}
//                 is24Hour={true}
//                 onChange={onChange}
//                 placeholder={placeHolder}
//                 textColor="#fff"
//             />
//             {/*<Text>{date.toLocaleString()}</Text>*/}
//             <StatusBar style="auto" />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width: '100%',
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 30,
//     },
// });




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

// export default function CustomDatePicker() {
//
//     const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
//     const today = new Date();
//     const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD");
//     const [selectedStartDate, setSelectedStartDate] = useState("");
//     const [startedDate, setStartedDate] = useState("12/12/2023");
//
//     // Component for modal content
//     const CustomDatePickerModal = ({ openStartDatePicker, startedDate, handleOnPressStartDate, handleChangeStartDate, setSelectedStartDate,}) => (
//         <Modal animationType="slide" transparent={true} visible={openStartDatePicker}>
//             <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                     <DatePicker
//                         mode="calendar"
//                         minimumDate={startDate}
//                         selected={startedDate}
//                         onDateChanged={handleChangeStartDate}
//                         onSelectedChange={(date) => setSelectedStartDate(date)}
//                         options={{
//                             backgroundColor: "#080516",
//                             textHeaderColor: "#469ab6",
//                             textDefaultColor: "#FFFFFF",
//                             selectedTextColor: "#FFF",
//                             mainColor: "#469ab6",
//                             textSecondaryColor: "#FFFFFF",
//                             borderColor: "rgba(122, 146, 165, 0.1)",
//                         }}
//                     />
//                     <TouchableOpacity onPress={handleOnPressStartDate}>
//                         <Text style={{ color: "white" }}>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </Modal>
//     );
//
//     function handleChangeStartDate(propDate) {
//         setStartedDate(propDate);
//     }
//
//     const handleOnPressStartDate = () => {
//         setOpenStartDatePicker(!openStartDatePicker);
//     };
//
//     return (
//
//         <SafeAreaView>
//             <KeyboardAvoidingView
//                 behavior={Platform.OS === "ios" ? "padding" : ""}
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     backgroundColor: "#fff",
//                 }}
//             >
//                 <View style={styles.containerTwo}>
//                     <View>
//                         <Text style={{ fontSize: 18 }}>Select Date</Text>
//                         <TouchableOpacity style={styles.inputBtn} onPress={handleOnPressStartDate}>
//                             <Text>{selectedStartDate ? selectedStartDate : 'Move In Date'}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//
//                 <CustomDatePickerModal
//                     openStartDatePicker={openStartDatePicker}
//                     startedDate={startedDate}
//                     handleOnPressStartDate={handleOnPressStartDate}
//                     handleChangeStartDate={handleChangeStartDate}
//                     setSelectedStartDate={setSelectedStartDate}
//                 />
//
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// }




export default function CustomDatePicker() {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

    const handleChangeStartDate = (date) => {
        setSelectedStartDate(date);
        setOpenStartDatePicker(false); // Close the date picker after selection
    };

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                style={{
                    width: '100%',
                    height: '100%',
                }} >

                <View style={styles.containerTwo}>
                    <View>
                        <TouchableOpacity style={styles.inputBtn} onPress={handleOnPressStartDate}>
                            <Text style={styles.text}>{selectedStartDate || 'Move In Date'}</Text>
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
