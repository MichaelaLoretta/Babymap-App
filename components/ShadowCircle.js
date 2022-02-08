import { StyleSheet, View} from "react-native";
import React from "react";

const shadowCircle = (props) => (
  <View style={styles.shadow}>{props.children}</View>
);

const styles = StyleSheet.create({
  shadow: {
    width: 310,
    height: 310,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 20,
  },

});

export default shadowCircle;
