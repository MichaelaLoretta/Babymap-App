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


const Login = ({ navigation }) => {


  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const nameInputHandler = (textIn) => {
    setName(textIn);
  };

  const handleInput = () => {
    if (name.length == 0) {
      Alert.alert("Please enter your whole name");
    } else {
     dispatch(update({ name }));
     navigation.navigate("Home");
    }
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

          <View style={{ backgroundColor: Colors.accent, borderRadius: 15 }}>
            <Button title="Lets Go" color="black" onPress={handleInput} />
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
});
