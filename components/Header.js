import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/img/logo.png")} />
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
