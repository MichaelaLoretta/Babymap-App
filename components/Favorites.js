import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 30, marginVertical: 25 }}>
        <Text>Get Fav Places from Async Storage</Text>
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
