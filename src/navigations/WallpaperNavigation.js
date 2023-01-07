import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local import
import { Home, Details } from "../screens/index";
import { COLORS } from "../constants/index";
const Stack = createNativeStackNavigator();
function WallpaperNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: COLORS.header,
        },
        contentStyle: {
          backgroundColor: COLORS.header,
        },
      }}
      initialRouteName="Home"
      style={styles.container}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          title: "New Wallpaper",
          // headerShown: false,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: "",
        })}
      />
    </Stack.Navigator>
  );
}

export default WallpaperNavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
