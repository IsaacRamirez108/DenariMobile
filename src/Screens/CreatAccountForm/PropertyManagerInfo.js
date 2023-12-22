import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const PropertyManagerInfo = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Property Management</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center', // Center the image horizontally
        padding: 30, // Adjust top margin for the content
    },
    text: {
        color: "white",
    }
});

export default PropertyManagerInfo;