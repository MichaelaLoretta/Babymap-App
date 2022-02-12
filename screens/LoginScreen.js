import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Colors from "../constants/Colors";
import Login from "../components/Login";
import ComplimentApi from "../components/ComplimentApi";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    
        <Header navigation={navigation} />
      
      <Login navigation={navigation} />
      <ComplimentApi />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? Colors.prime : Colors.accent,
  },
});
