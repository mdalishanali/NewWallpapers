import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details } from "../screens/index";
import { COLORS } from "../constants/index";
import CategoryTab from "../components/CategoryTab";

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
      initialRouteName="CategoryTab"
    >
      <Stack.Screen
        name="CategoryTab"
        component={CategoryTab}
        options={({ route }) => ({
          title: "New Wallpaper",
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: "",
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default WallpaperNavigation;
