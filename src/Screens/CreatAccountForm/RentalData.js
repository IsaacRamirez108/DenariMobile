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

                <CustomDatePicker placeHolder={'Move in date'}/>

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






// import {
//     Text,
//     View,
//     StyleSheet,
//     KeyboardAvoidingView,
//     Platform,
//     TouchableOpacity,
//     Modal,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// import DatePicker from "react-native-modern-datepicker";
// import { getFormatedDate } from "react-native-modern-datepicker";
//
// export default function RentalData() {
//     const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
//     const today = new Date();
//     const startDate = getFormatedDate(
//         today.setDate(today.getDate() + 1),
//         "MM/DD/YYYY"
//     );
//     const [selectedStartDate, setSelectedStartDate] = useState("");
//     const [startedDate, setStartedDate] = useState("12/12/2023");
//
//     function handleChangeStartDate(propDate) {
//         setStartedDate(propDate);
//     }
//
//     const handleOnPressStartDate = () => {
//         setOpenStartDatePicker(!openStartDatePicker);
//     };
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             {/*<KeyboardAvoidingView*/}
//             {/*    behavior={Platform.OS === "ios" ? "padding" : ""}*/}
//             {/*    style={{*/}
//             {/*        width: "100%",*/}
//             {/*        height: "100%",*/}
//             {/*        backgroundColor: "#fff",*/}
//             {/*    }}*/}
//             {/*>*/}
//                 <View style={styles.content}>
//
//                     <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 64 }}>
//                         <View>
//                             {/*<Text style={{ fontSize: 18 }}>Select Date</Text>*/}
//                             <TouchableOpacity
//                                 style={styles.inputBtn}
//                                 onPress={handleOnPressStartDate}
//                             >
//                                 <Text>{selectedStartDate}</Text>
//                             </TouchableOpacity>
//                         </View>
//
//                         <TouchableOpacity
//                             onPress={() => console.log("Subimit data")}
//                             style={styles.submitBtn}
//                         >
//                             <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
//                         </TouchableOpacity>
//                     </View>
//
//                     {/* Create modal for date picker */}
//                     <Modal
//                         animationType="slide"
//                         transparent={true}
//                         visible={openStartDatePicker}
//                     >
//                         <View style={styles.centeredView}>
//                             <View style={styles.modalView}>
//                                 <DatePicker
//                                     mode="calendar"
//                                     minimumDate={startDate}
//                                     selected={startedDate}
//                                     onDateChanged={handleChangeStartDate}
//                                     onSelectedChange={(date) => setSelectedStartDate(date)}
//                                     options={{
//                                         backgroundColor: "#080516",
//                                         textHeaderColor: "#469ab6",
//                                         textDefaultColor: "#FFFFFF",
//                                         selectedTextColor: "#FFF",
//                                         mainColor: "#469ab6",
//                                         textSecondaryColor: "#FFFFFF",
//                                         borderColor: "rgba(122, 146, 165, 0.1)",
//                                     }}
//                                 />
//
//                                 <TouchableOpacity onPress={handleOnPressStartDate}>
//                                     <Text style={{ color: "white" }}>Close</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </Modal>
//                 </View>
//             {/*</KeyboardAvoidingView>*/}
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//
//     content: {
//         alignItems: 'center',
//     },
//     text: {
//         color: "white",
//     },
//     formContainer: {
//         width: '100%',
//         alignItems: 'center',
//     },
//     inputBtn: {
//         // borderWidth: 1,
//         // borderRadius: 4,
//         // borderColor: "#222",
//         // height: 50,
//         // paddingLeft: 8,
//         // fontSize: 18,
//         // justifyContent: "center",
//         // marginTop: 14,
//         color: '#fff',
//         backgroundColor: '#1d2738',
//         height: 55,
//         borderRadius: 30,
//         paddingHorizontal: 25,
//         marginVertical: 7,
//     },
//     submitBtn: {
//         backgroundColor: "#342342",
//         paddingVertical: 22,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 8,
//         // paddingVertical: 12,
//         marginVertical: 16,
//     },
//     centeredView: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//
//     modalView: {
//         margin: 20,
//         backgroundColor: "#080516",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 20,
//         padding: 35,
//         width: "90%",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
// });


