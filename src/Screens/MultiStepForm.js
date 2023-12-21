import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ field1: '', field2: '', field3: '', field4: '' });

    const handleNext = () => {
        if (step < 4) {
            // Move to the next step
            setStep(step + 1);
        } else {
            console.log('Form submitted:', data);
            // Additional actions after form submission
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            // Move to the previous step
            setStep(step - 1);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View style={styles.container}>
                        <Text>Step 1</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Field 1"
                            value={data.field1}
                            onChangeText={(text) => setData({ ...data, field1: text })}
                        />
                        <Button title="Next" onPress={handleNext} />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.container}>
                        <Text>Step 2</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Field 2"
                            value={data.field2}
                            onChangeText={(text) => setData({ ...data, field2: text })}
                        />
                        <Button title="Previous" onPress={handlePrev} />
                        <Button title="Next" onPress={handleNext} />
                    </View>
                );
            case 3:
                return (
                    <View style={styles.container}>
                        <Text>Step 3</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Field 3"
                            value={data.field3}
                            onChangeText={(text) => setData({ ...data, field3: text })}
                        />
                        <Button title="Previous" onPress={handlePrev} />
                        <Button title="Next" onPress={handleNext} />
                    </View>
                );
            case 4:
                return (
                    <View style={styles.container}>
                        <Text>Step 4</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Field 4"
                            value={data.field4}
                            onChangeText={(text) => setData({ ...data, field4: text })}
                        />
                        <Button title="Previous" onPress={handlePrev} />
                        <Button title="Submit" onPress={handleNext} />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderStep()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
});

export default MultiStepForm;


