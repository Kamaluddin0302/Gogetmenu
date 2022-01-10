import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Catagery({ data }) {
  return (
    <View
      style={[
        styles.container,
        data.name == "Catagery Name3"
          ? { borderBottomColor: "#035281", borderBottomWidth: 2 }
          : {},
      ]}
    >
      <Image
        source={{ uri: data.image }}
        style={[
          styles.image,
          data.name == "Catagery Name3"
            ? { borderColor: "#035281", borderWidth: 2 }
            : {},
        ]}
      />
      <Text
        style={[
          styles.Name,
          data.name == "Catagery Name3" ? { color: "#035281" } : {},
        ]}
      >
        {data.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    height: 100,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 2,
  },
  Name: {
    width: 60,
    textAlign: "center",
    fontSize: 12,
  },
});
