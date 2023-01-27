import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { COLORS } from "../constants";
import AbstractTab from "../tabs/AbstractTab";
import BeachTab from "../tabs/BeachTab";
import NatureTab from "../tabs/NatureTab";
import SkyTab from "../tabs/SkyTab";
import TrendingTab from "../tabs/TrendingTab";
import WallpaperList from "./WallpaperList";

const FirstRoute = ({ foo }) => {
  console.log("foo: ", foo);
  return (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <Text>foo{foo}</Text>
    </View>
  );
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: () => <TrendingTab />,
  second: () => <SkyTab />,
  third: () => <NatureTab />,
  four: () => <BeachTab />,
  five: () => <AbstractTab />,
});

export default function CategoryTab() {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Trending" },
    { key: "second", title: "Sky" },
    { key: "third", title: "Nature" },
    { key: "four", title: "Beach" },
    { key: "five", title: "Abstract" },
  ]);

  const renderTabBar = (props) => (
    <>
      <TabBar
        {...props}
        activeColor={"white"}
        inactiveColor={"grey"}
        style={{ marginTop: -10, backgroundColor: "transparent" }}
        indicatorStyle={{ backgroundColor: "white" }}
        tabStyle={styles.bubble}
        labelStyle={styles.noLabel}
        scrollEnabled={true}
      />
    </>
  );
  return (
    <TabView
      lazy={4}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
    // display: "none",
    // height: 0,
    // fontSize: 15,
    // width: 55,
  },
  bubble: {
    flex: 1,
    width: 105,
    // backgroundColor: "transparent",
    // paddingHorizontal: 2,
    // paddingVertical: 12,
    // borderRadius: 10,
  },
});
