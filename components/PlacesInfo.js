import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlacesInfo = ({ visible, setVisible }) => {
  const [showModal, setShowModal] = useState(visible);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.modalInner}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity>
                <Icon
                  name="star"
                  type="ionicon"
                  color={Colors.accent}
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Icon
                  name="close"
                  type="ionicon"
                  color={Colors.text}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  borderRadius: 34,
                  overflow: "hidden",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={require("../assets/img/cozycafe.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={{ padding: 5 }}>
                <Text style={styles.modalText}>Bibliotekets Café</Text>
                <Text style={styles.modalText}>Drottninggatan 63</Text>
                <View style={{ marginLeft: 5 }}>
                  <Text>- Micro</Text>
                  <Text>- Fåtöljer</Text>
                  <Text>- Leksaker</Text>
                  <Text>- Skötbord</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlacesInfo;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#00000000",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalInner: {
    backgroundColor: Colors.prime,
    width: 350,
    height: 200,
    marginTop: 130,
    borderColor: Colors.sec,
    borderWidth: 3,
    borderRadius: 30,
    padding: 20,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.26,
    shadowRadius: 4,
  },
  header: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 140,
    height: 120,
    resizeMode: "cover",
  },
  modalText: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 5,
    marginLeft: 5,
  },
});
