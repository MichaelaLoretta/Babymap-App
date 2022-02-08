import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import ShadowCircle from "./ShadowCircle";
import Circle from "./Circle";
import Map from "./Map";

const PickMap = () => {
  const [mapView, setMapView] = useState(require("../assets/img/feedMap.png"));

  const [visible, setVisible] = useState(false);

  const feed = require("../assets/img/feedMap.png");
  const play = require("../assets/img/playMap.png");
  const diaper = require("../assets/img/diaperMap.png");

  const choices = { feed, play, diaper };

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ShadowCircle>
          {
            <View>
              <Circle>{<Map />}</Circle>
            </View>
          }
        </ShadowCircle>
      </View>

      <View style={styles.btnBox}>
        <TouchableOpacity
          onPress={() => {
            setMapView(choices.feed);
          }}
        >
          <MyIcon iconName="heart" iconType="ionicon" title="Feed" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMapView(choices.play);
          }}
        >
          <MyIcon iconName="moon" iconType="ionicon" title="Play" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMapView(choices.diaper);
          }}
        >
          <MyIcon iconName="cloud" iconType="ionicon" title="Diaper" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyIcon = (props) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Icon
      name={props.iconName}
      type={props.iconType}
      color={Colors.text}
      size={50}
    />
    <Text style={{ fontSize: 19 }}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBox: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  /* mapExample: {
    backgroundColor: "#000000", //transparent
    width: 40,
    height: 40,
    position: "absolute",
    left: 167,
    top: 115,
    borderRadius: 20,
  }, */
});

export default PickMap;
