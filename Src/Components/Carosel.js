import React from "react";
import { View, Text } from "react-native";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          title: "Beautiful and dramatic Antelope Canyon",
          subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
          illustration:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZw-VJUeQE0jmkh6tSCallgQLGBcSo57X0IA&usqp=CAU",
        },
        {
          title: "Earlier this morning, NYC",
          subtitle: "Lorem ipsum dolor sit amet",
          illustration: "https://i.imgur.com/UPrs1EWl.jpg",
        },
        {
          title: "White Pocket Sunset",
          subtitle: "Lorem ipsum dolor sit amet et nuncat ",
          illustration: "https://i.imgur.com/MABUbpDl.jpg",
        },
        {
          title: "Acrocorinth, Greece",
          subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
          illustration: "https://i.imgur.com/KZsmUi2l.jpg",
        },
        {
          title: "The lone tree, majestic landscape of New Zealand",
          subtitle: "Lorem ipsum dolor sit amet",
          illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
        },
      ],
      activeSlide: 0,
    };
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 30,
          height: 3,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#035281",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <View>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth - 120}
          itemWidth={screenWidth - 60}
          data={this.state.entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
    borderRadius: 25,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
