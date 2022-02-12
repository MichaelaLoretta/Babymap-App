import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Colors from "../constants/Colors";
import Favorites from "../components/Favorites";

const FavoritesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View>
        <TouchableOpacity
          style={{ marginHorizontal: 20, marginVertical: 5 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: Colors.text }}>Go back To Map</Text>
        </TouchableOpacity>
      </View>
      <Favorites />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? Colors.prime : Colors.accent,
  },
});
