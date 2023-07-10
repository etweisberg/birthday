import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { styles } from "../utils/styles";

const SummaryCarousel = (props) => {
  const { choices, pictures } = props;
  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image
          source={{ uri: pictures[item[0]].uri }}
          style={styles.carouselImage}
        />
        <Text style={styles.carouselTitle}>{item[0]}</Text>
        <Text style={styles.carouselDescription}>{item[1]}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={Object.entries(choices)}
      renderItem={renderItem}
      sliderWidth={500}
      itemWidth={300}
    />
  );
};

export default SummaryCarousel;
