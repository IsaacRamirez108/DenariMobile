// import React, {useState} from 'react';
// import { View, SafeAreaView, Pressable, Text, StyleSheet, Image } from 'react-native';
// import Personal from "./Personal";
// import Address from "./Address";
// import PropertyManagerInfo from "./PropertyManagerInfo";
// import RentalData from "./RentalData";
// import CreateUser from "./CreateUser";
//
// export default function Form() {
//     const [formData, setFormData] = useState ({
//         // User Data
//         firstName: "",
//         lastName: "",
//         middleName: "",
//         username: "",
//         email: "",
//         password: "",
//
//         // Personal Data
//         SSN: "",
//         DOB: "",
//         phoneNumber: "",
//
//         //Address
//         street: "",
//         aptNumber: "",
//         city: "",
//         state: "",
//         postalCode: "",
//
//         // Property Management Info
//         individual_company: "",
//         name: "",
//         contact: "",
//         companyEmail: "",
//
//         // Rental Data
//         monthlyRent: "",
//         moveInDate: "",
//         moveOutDate: "",
//         rentalPortal: "",
//         formPayment: "",
//     });
//
//     const [screen, setScreen] = useState(0)
//     const FormTitle = [
//         "Creat Account",
//         "Personal Info",
//         "Address",
//         "Property Management Info",
//         "Rental Data",
//     ];
//     const ScreenDisplay = () => {
//         if (screen === 0){
//             return <CreateUser/>;
//         } else if (screen === 1){
//             return <Personal/>;
//         } else if (screen === 2){
//             return <Address/>;
//         } else if (screen === 3){
//             return <RentalData/>;
//         } else {
//             return <PropertyManagerInfo/>
//         }
//     }
//     return (
//         <View style={styles.content}>
//             <Text style={styles.text}>{FormTitle[screen]}</Text>
//             <View>{ScreenDisplay()}</View>
//
//             <Pressable
//                 disabled={screen === 0}
//                 onPress={() => {
//                 setScreen((currScreen) => currScreen - 1)
//             }} >
//                 <Text style={styles.text}>Prev</Text>
//             </Pressable>
//
//             <Pressable onPress={() => {
//                 setScreen((currScreen) => currScreen + 1)
//             }} >
//                 <Text style={styles.text}>Next</Text>
//             </Pressable>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     content: {
//         alignItems: 'center', // Center the image horizontally
//         padding: 30, // Adjust top margin for the content
//     },
//     text: {
//         color: "white",
//     }
// });




















import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Personal from "./Personal";
import Address from "./Address";
import PropertyManagerInfo from "./PropertyManagerInfo";
import RentalData from "./RentalData";
import CreateUser from "./CreateUser";
import { Icon } from 'react-native-elements'
// Import your form components here

export default function Form() {
    const [screen, setScreen] = useState(0);
    const FormTitle = [
        "Create Account",
        "Personal Info",
        "Address",
        "Property Management Info",
        "Rental Data",
    ];

    const handleNext = () => {
        setScreen((currentScreen) => Math.min(currentScreen + 1, FormTitle.length - 1));
    };

    const handlePrev = () => {
        setScreen((currentScreen) => Math.max(currentScreen - 1, 0));
    };

    const ScreenDisplay = () => {
        if (screen === 0){
            return <CreateUser/>;
        } else if (screen === 1){
            return <Personal/>;
        } else if (screen === 2){
            return <Address/>;
        } else if (screen === 3){
            return <RentalData/>;
        } else {
            return <PropertyManagerInfo/>
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {screen !== 0 && (
                    // <Pressable onPress={handlePrev}>
                        {/*<Text style={styles.prevButton}></Text>*/}
                        <Icon
                            name='chevron-left'
                            type='font-awesome'
                            color='white'
                            size={35}
                            iconStyle={}
                            style={styles.prevButton}
                            onPress={handlePrev}
                        />
                    // </Pressable>
                )}
                {/*<Text style={styles.title}>{FormTitle[screen]}</Text>*/}
            </View>

            <View style={styles.content}>{ScreenDisplay()}</View>

            <Pressable style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.text}>Next</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        // marginLeft: 20,
    },
    prevButton: {
        color: 'white',
        fontSize: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'blue', // Change to your desired color
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'white',
    },
});

















//
// import React, { useState } from 'react';
// import { View, Text, Pressable, StyleSheet } from 'react-native';
// // Import your form components here
//
// export default function Form() {
//     const [screen, setScreen] = useState(0);
//     const FormTitle = [
//         "Create Account",
//         "Personal Info",
//         "Address",
//         "Property Management Info",
//         "Rental Data",
//     ];
//
//     const handleNext = () => {
//         setScreen((currentScreen) => Math.min(currentScreen + 1, FormTitle.length - 1));
//     };
//
//     const handlePrev = () => {
//         setScreen((currentScreen) => Math.max(currentScreen - 1, 0));
//     };
//
//     const ScreenDisplay = () => {
//         // Your logic to display different screens based on 'screen' state
//     };
//
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 {screen !== 0 && (
//                     <Pressable style={styles.backButton} onPress={handlePrev}>
//
//                     </Pressable>
//                 )}
//                 <Text style={styles.title}>{FormTitle[screen]}</Text>
//             </View>
//
//             <View style={styles.content}>{ScreenDisplay()}</View>
//
//             <Pressable style={styles.nextButton} onPress={handleNext}>
//                 <Text style={styles.text}>Next</Text>
//             </Pressable>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         position: 'relative',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
//     title: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginLeft: 20,
//     },
//     backButton: {
//         position: 'absolute',
//         top: 20,
//         left: 20,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     nextButton: {
//         position: 'absolute',
//         bottom: 20,
//         alignSelf: 'center',
//         backgroundColor: 'blue', // Change to your desired color
//         padding: 10,
//         borderRadius: 5,
//     },
//     text: {
//         color: 'white',
//     },
// });
