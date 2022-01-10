import React from "react";
import { View, Text, ScrollView } from "react-native";
import MenuHeader from "../Components/MenuHeader";
import Slider from "../Components/Carosel";
import Catagery from "../Components/Catagery";
import CatageryJson from "./../Config/CatageryJson.json";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <MenuHeader />
      <Slider />
      <ScrollView horizontal={true}>
        {CatageryJson.map((val, ind) => (
          <Catagery key={ind} data={val} />
        ))}
      </ScrollView>
      <Text>Home</Text>
    </View>
  );
}


