import { SelectList } from 'react-native-dropdown-select-list'
import {useState} from "react";
import {StyleSheet, View} from "react-native";

const CustomDropDown = ({placeHolder}) => {

    const [select, setSelected] = useState("");

    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    return(
        <View style={styles.content}>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                placeholder={placeHolder}
                dropdownTextStyles={styles.text}
                boxStyles={styles.boxStyles}
            />
        </View>

    )
};

const styles = StyleSheet.create({
    content:{
        width: "100%",
        paddingHorizontal: 3,
    },
    text: {
        color: 'white',
    },
    boxStyles: {
        color: 'white',
        backgroundColor: '#1d2738',
        height: 55,
        borderRadius: 30,
        marginVertical: 7,
        alignItems: 'center',
        borderWidth: 0,
    }
});

export default CustomDropDown;
