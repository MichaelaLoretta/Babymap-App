import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ShadowCircle from "./ShadowCircle";
import Circle from "./Circle";
import Map from "./Map";

const PickMap = () => {
  const [latitude, setLatitude] = useState(59.33422);
  const [longitude, setLongitude] = useState(18.06098);

  const feed = require("../assets/img/FeedIcon.png");
  const diaper = require("../assets/img/DiaperIcon.png");
  const play = require("../assets/img/PlayIcon.png");

  /* const updateCoordinates = (long, lat) => {
    setLatitude(long);
    setLongitude(lat);
  };  //denna funktion skulle uppdatera koordinaterna som sedan skulle skickas till Map component
 */
  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ShadowCircle>
          {
            <View>
              <Circle>{<Map lat={latitude} long={longitude} />}</Circle>
            </View>
          }
        </ShadowCircle>
      </View>

      <View style={styles.btnBox}>
        <TouchableOpacity onPress={() => { //Här ville jag eg ha funktionen updateCoordinates som skulle skicka vidare koordinaterna
          setLatitude(59.33422);
          setLongitude(18.06098);
        }}>
          <MyIcon source={feed} title="Feed" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLatitude(59.30828);
            setLongitude(18.07584);
          }}
        >
          <MyIcon source={diaper} title="Diaper" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLatitude(59.3412);
            setLongitude(18.05651);
          }}
        >
          <MyIcon source={play} title="Play" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyIcon = (props) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Image style={styles.image} source={props.source} />
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
  image: {
    width: 80,
    height: 80,
  },
});

export default PickMap;
