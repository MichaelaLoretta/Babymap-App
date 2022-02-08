import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import React from "react";
import IntroImage from "../components/IntroImage";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <IntroImage />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? Colors.prime : Colors.accent, //Conditional rendering för ios och android
  },
});
