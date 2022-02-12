import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";

const Header = ({ navigation }) => {
  const headerPressed = () => {
    navigation.navigate("Welcome");
  };

  const starPressed = () => {
    navigation.navigate("Favorites");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity style={styles.container} onPress={headerPressed}>
        <Image
          style={styles.image}
          source={require("../assets/img/logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginRight: 15 }} onPress={starPressed}>
        <Icon name="star" type="ionicon" color={Colors.accent} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    shadowColor: "black",
    shadowOffset: { width: -3, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.26,
  },
});
