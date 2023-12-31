import { SelectList } from 'react-native-dropdown-select-list'
import {useState} from "react";
import {StyleSheet, View} from "react-native";

const CustomDropDown = ({ placeHolder, data, setSelected }) => {

    const [select, setSelected] = useState("");

    return(
        <View style={styles.content}>

            <SelectList
                setSelected={setSelected}
                data={data}
                save="value"
                placeholder={placeHolder}
                dropdownTextStyles={styles.text}
                boxStyles={styles.input}
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
    input: {
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
