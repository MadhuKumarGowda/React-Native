import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
} from "react-native";

const backgroundImage = require("../../assets/images/bg.jpg");

import "../../global.css";
import ButtonComp from "@/components/ButtonComp";

export default function HomeScreen() {
  const handleClick = () => {
    alert("Button Clicked");
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
        title="White Btn"
        onClick={handleClick}
        color="blue"
      ></ButtonComp>
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
