import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Personal = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Personal</Text>
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

export default Personal;
