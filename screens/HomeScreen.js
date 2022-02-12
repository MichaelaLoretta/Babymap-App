import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import PickMap from "../components/PickMap";

const HomeScreen = ({ navigation }) => {
  const name = useSelector((state) => state.user.name);
  const [message, setMessage] = useState("Hi " + name);

  useEffect(() => {
    setTimeout(() => {
      setMessage("Welcome to BabyMap");
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <View style={{ alignItems: "center" }}>
        <View style={styles.msgView}>
          <Text style={{ fontSize: 19, textAlign: "center" }}>{message}</Text>
        </View>
      </View>
      <PickMap />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? Colors.prime : Colors.accent,
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  topImg: {
    width: 500,
    height: 500,
    resizeMode: "cover",
  },
  msgView: {
    backgroundColor: "#00000000",
    padding: 9,
    borderRadius: 15,
    marginTop: 20,
  },
});
