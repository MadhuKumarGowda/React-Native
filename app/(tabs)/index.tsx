import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  Button,
  Modal,
} from "react-native";

const backgroundImage = require("../../assets/images/bg.jpg");

import "../../global.css";
import ButtonComp from "@/components/ButtonComp";
import { useState } from "react";
import ModalComp from "@/components/ModalComp";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    alert("Button Clicked");
  };
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className="flex-1 flex-col mt-10">
      <Text className="text-black flex justify-center items-center">
        Hello Expo
      </Text>
      <ButtonComp
        title="Red Btn"
        onClick={handleClick}
        color="red"
      ></ButtonComp>
      <ButtonComp title="Empty Btn" onClick={handleClick}></ButtonComp>
      <ButtonComp
        title="Modal Handler"
        color="blue"
        onClick={handleModal}
      ></ButtonComp>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View className="flex-1 bg-gray-500 padding">
          <Text>Modal Content</Text>
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(false)}
            color="blue"
          ></Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
