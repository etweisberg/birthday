import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";
import { styles } from "../utils/styles";
import { pages } from "../utils/pages";
import { useNavigation } from "@react-navigation/native";

export default function ResultModal(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const { result, nextPage } = props;

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>🎉 You flipped {result}! 🎉</Text>
            <Button
              title="Continue"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate(nextPage);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
