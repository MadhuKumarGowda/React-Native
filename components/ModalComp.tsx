import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import ButtonComp from "./ButtonComp";
{
  /*
    Modal is a screen that overlays the app content to provide important information or prompt the user for a decision
    Since they are purposefully interruptive make sure you use them only when necessary  
    onRequestClose will trigger when use click back button
    animationType by default none, we can choose slide || fade
    presentationStyle is appearance  of modal in iOS only not for android, we can choose formSheet || pageSheet
     
*/
}

type Props = {
  isVisble: boolean;
};
const ModalComp = ({ isVisble }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      visible={isVisble}
      onRequestClose={() => setModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
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
  );
};

export default ModalComp;
