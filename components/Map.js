import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import PlacesInfo from "./PlacesInfo";
import { useState } from "react";

const Map = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ width: 310, height: 310 }}>
      <MapView
        style={{ flex: 1 }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: props.lat, //dynamiska koordinater från PickMap MEN just nu uppdateras inte kartan
          longitude: props.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: props.lat, longitude: props.long }} //Dynamiska koordinater
          onPress={() => {
            setVisible(true);
          }}
        >
          <Callout tooltip>
            <PlacesInfo visible={visible} setVisible={setVisible}></PlacesInfo>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapExample: {
    backgroundColor: "red",
    width: 30,
    height: 60,
    borderRadius: 15,
  },
});
