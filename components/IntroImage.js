import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import React from "react";

const IntroImage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/img/intropic.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default IntroImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 900,
    resizeMode: "contain",
  },
});
