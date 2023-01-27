import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WallpaperNavigation from "./src/navigations/WallpaperNavigation";
import { COLORS } from "./src/constants/index";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar
            style="light"
            backgroundColor={COLORS.statusbar}
            color="white"
          />
          <WallpaperNavigation />
        </NavigationContainer>
        <Toast />
      </GestureHandlerRootView>
    </>
  );
}

