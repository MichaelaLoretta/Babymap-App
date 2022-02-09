import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";

const ComplimentApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.affirmations.dev/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("You are enough"));
  }, []);

  return (
    <View
      style={{
        backgroundColor: Colors.sec,
        padding: 10,
        borderRadius: 15,
        margin: 20,
      }}
    >
      <Text style={{ marginVertical: 5 }}>Just a small reminder:</Text>
      <Text style={{ fontSize: 19, textAlign: "center" }}>
        {data.affirmation}
      </Text>
    </View>
  );
};

export default ComplimentApi;
