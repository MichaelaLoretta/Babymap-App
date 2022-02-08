import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = (props) => {
  return <View style={styles.circle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  circle: {
    width: 310,
    height: 310,
    borderRadius: 155,
    padding: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Circle;
