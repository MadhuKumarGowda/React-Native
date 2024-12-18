import React from "react";
import { View, Button } from "react-native";

type Props = {
  title: string;
  onClick: () => void;
  color?: string;
};
const ButtonComp = ({ title, onClick, color }: Props) => {
  return (
    <View className="bg-red-600 padding text-black">
      <Button
        title={title}
        onPress={onClick}
        color={color ? color : "orange"}
      ></Button>
    </View>
  );
};

export default ButtonComp;
