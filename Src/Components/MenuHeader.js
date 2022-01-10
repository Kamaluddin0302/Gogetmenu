import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function MenuHeader() {
  return (
    <View style={styles.header}>
      <FontAwesome name="first-order" size={23} color="green" />
      <Text style={styles.name}>Company Name</Text>
      <Ionicons name="search" size={23} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
    paddingBottom: 5,
    margin: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
