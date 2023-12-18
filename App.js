import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SignInScreen from "./src/Screens/SignInScreen/SignInScreen";
import CreatAccount from "./src/Screens/CreatAccountScreen";

const App = () => {
  return (
      <LinearGradient
          colors={['#030a18', '#15223c']}
          // colors={['#0d2c5a', '#03284e', '#012442', '#042035', '#081b29']}
          style={styles.container}>

          <SafeAreaView style={styles.root}>
              {/*<SignInScreen/>*/}
              <CreatAccount/>
          </SafeAreaView>

      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
    container: {
        flex: 1,
    },
});

export default App;
