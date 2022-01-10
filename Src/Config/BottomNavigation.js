import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Order from "../Screens/Order";
import Request from "../Screens/Request";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu-open" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: true,
          headerTitle: "Conform your order",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={Request}
        options={{
          headerShown: true,
          headerTitle: "Raise Your Request",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="phone-classic"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
