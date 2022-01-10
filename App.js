import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigation from "./Src/Config/MainStackNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <MainStackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
