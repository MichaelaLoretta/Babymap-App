import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { update } from "../Redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const nameInputHandler = (textIn) => {
    setName(textIn);
  };

  const handleInput = () => {
    if (name.length == 0) {
      Alert.alert("Please enter your name");
    } else {
      dispatch(update({ name }));
      AsyncStorage.setItem("userName", name);
      setName("");
      console.log("saved");
      navigation.navigate("Home");
    }
  };

  const getLastUser = () => {
    AsyncStorage.getItem("userName").then((lastName) => {
      setLastName(lastName);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View>
          <View>
            <TextInput
              style={styles.inputField}
              placeholder="Your Name Here"
              onChangeText={nameInputHandler}
            />
          </View>
          <View>
            <View style={styles.btn}>
              <Button title="Log In" color="black" onPress={handleInput} />
            </View>
            <View style={styles.btn}>
              <Button
                title="Get the last User"
                color="black"
                onPress={getLastUser}
              />
            </View>
            <View>
              <Text>{lastName}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },

  inputField: {
    borderBottomColor: Colors.text,
    borderBottomWidth: 3,
    width: 150,
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    fontSize: 19,
  },
  btn: {
    backgroundColor: Colors.accent,
    borderRadius: 15,
    marginVertical: 10,
  },
});
