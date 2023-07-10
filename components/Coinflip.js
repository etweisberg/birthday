import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "../utils/styles";

export default function CoinFlipAnimation(props) {
  const { string1, string2, event, choices, setChoices, callback } = props;
  const [isFlipping, setIsFlipping] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [currentSide, setCurrentSide] = useState("heads");

  useEffect(() => {
    if (isFlipping) {
      startAnimation();
    }
  }, [isFlipping]);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newSide = currentSide === "heads" ? "tails" : "heads";
      setCurrentSide(newSide);
    });
    setIsFlipping(false);
    //wait for animation to finish before setting callback
    setTimeout(() => {
      callback(true);
    }, 2000);
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipCoin = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      let result;
      if (Math.random() < 0.5) {
        result = string1;
      } else {
        result = string2;
      }
      let newChoices = { ...choices };
      newChoices[event] = result;
      setChoices(newChoices);
    }
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={flipCoin}>
        <View style={{ alignItems: "center" }}>
          <Animated.View
            style={[frontAnimatedStyle, { backfaceVisibility: "hidden" }]}
          >
            <Image
              source={require("../assets/heads.png")}
              style={styles.coin}
            ></Image>
          </Animated.View>
          <Animated.View
            style={[
              backAnimatedStyle,
              { backfaceVisibility: "hidden", position: "absolute" },
            ]}
          >
            <Image
              source={require("../assets/tails.png")}
              style={styles.coin}
            ></Image>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
