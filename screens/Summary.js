import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SummaryCarousel from "../components/SummaryCarousel";
import { styles } from "../utils/styles";

export default function Summary() {
  const { choices, pictures } = useContext(AppContext);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>🎂 Look Back on Today 🎂</Text>
        <Text style={styles.summaryText}>
          There were 7 stops with 2 options for each meaning there were a total
          of 2^7 = 128 possible ways we could have celebrated your birthday.
          Here's what you chose:
        </Text>
      </View>
      <SummaryCarousel choices={choices} pictures={pictures}></SummaryCarousel>
    </View>
  );
}
