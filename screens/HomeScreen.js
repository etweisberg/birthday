import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [animationStarting, setAnimationStarting] = React.useState(false);

  const heartAnimation1 = useRef(new Animated.Value(0)).current;
  const heartAnimation2 = useRef(new Animated.Value(0)).current;
  const heartAnimation3 = useRef(new Animated.Value(0)).current;
  const heartAnimation4 = useRef(new Animated.Value(0)).current;
  const heartAnimation5 = useRef(new Animated.Value(0)).current;
  const heartAnimation6 = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(heartAnimation1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(heartAnimation2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(heartAnimation3, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(heartAnimation4, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(heartAnimation5, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(heartAnimation6, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const heartOpacity1 = heartAnimation1.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const heartTranslateY1 = heartAnimation1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -200],
  });

  const heartOpacity2 = heartAnimation2.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const heartTranslateY2 = heartAnimation2.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -195],
  });

  const heartOpacity3 = heartAnimation3.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 0],
  });

  const heartTranslateY3 = heartAnimation3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -250],
  });

  const heartOpacity4 = heartAnimation4.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0],
  });

  const heartTranslateY4 = heartAnimation4.interpolate({
    inputRange: [0, 1],
    outputRange: [200, -100],
  });

  const heartOpacity5 = heartAnimation5.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 0],
  });

  const heartTranslateY5 = heartAnimation5.interpolate({
    inputRange: [0, 1],
    outputRange: [-25, 100],
  });

  const heartOpacity6 = heartAnimation6.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 0],
  });

  const heartTranslateY6 = heartAnimation6.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, -50],
  });

  const handleImagePress = () => {
    // Navigate to the next page
    startAnimation();
    setAnimationStarting(true);
    //delay navigation to next page by 6 seconds
    setTimeout(() => {
      navigation.navigate("Breakfast ☕️");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Happy Birthday Significant Other!</Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={require("../assets/user.png")} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.bottomText}>Tap the birthday person to continue</Text>
      {animationStarting && (
        <>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity1,
                transform: [{ translateY: heartTranslateY1 }],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity2,
                transform: [
                  { translateY: heartTranslateY2 },
                  { translateX: -100 },
                ],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity3,
                transform: [
                  { translateY: heartTranslateY3 },
                  { translateX: 100 },
                ],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity4,
                transform: [
                  { translateY: heartTranslateY4 },
                  { translateX: 20 },
                ],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity5,
                transform: [
                  { translateY: heartTranslateY5 },
                  { translateX: 60 },
                ],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.heart,
              {
                opacity: heartOpacity6,
                transform: [
                  { translateY: heartTranslateY6 },
                  { translateX: -125 },
                ],
              },
            ]}
          >
            {"\u2764"}
          </Animated.Text>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
