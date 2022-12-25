import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WallpaperNavigation from "./src/navigations/WallpaperNavigation";
import { COLORS } from "./src/constants/index";

export default function App() {
  return (
    <>
        <NavigationContainer>
          <StatusBar
            style="light"
            backgroundColor={COLORS.statusbar}
            color="white"
          />
          <WallpaperNavigation />
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
    // color: "white",
  },
});
