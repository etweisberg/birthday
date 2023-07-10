import React, { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";
import CoinFlipAnimation from "../components/Coinflip";
import { styles } from "../utils/styles";
import { pages } from "../utils/pages";
import ResultModal from "../components/ResultModal";
import { options } from "../utils/options";

const PAGE_NO = 3;

export default function Third() {
  const navigation = useNavigation();
  const [doneFlipping, setDoneFlipping] = useState(false);
  const { choices, setChoices } = useContext(AppContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!doneFlipping && (
        <View style={styles.container}>
          <Text style={styles.header}>{pages[PAGE_NO]}</Text>
          <CoinFlipAnimation
            string1={options[PAGE_NO][0]}
            string2={options[PAGE_NO][1]}
            event={pages[PAGE_NO]}
            choices={choices}
            setChoices={setChoices}
            callback={setDoneFlipping}
          ></CoinFlipAnimation>
        </View>
      )}
      {doneFlipping && choices[pages[PAGE_NO]] && (
        <View style={styles.container}>
          <ResultModal
            result={choices[pages[PAGE_NO]]}
            nextPage={`Camera for ${pages[PAGE_NO]}`}
          ></ResultModal>
        </View>
      )}
    </View>
  );
}
