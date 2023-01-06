import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

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
  first: () => <FirstRoute foo={"alishan"} />,
  second: () => <FirstRoute foo={"second"} />,
  third: () => <FirstRoute foo={"thired"} />,
  four: () => <FirstRoute foo={"thired"} />,
});

export default function CategoryTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "1" },
    { key: "second", title: "Second" },
    { key: "third", title: "Second" },
    { key: "four", title: "Second" },
  ]);

  const getTabBarIcon = (props) => {
    const { route, focused, color } = props;
    if (route.key === "Search") {
      return <Icon name="search" size={30} color={focused ? "red" : color} />;
    } else {
      return (
        <FontAwesome
          name="twitter"
          size={30}
          color={focused ? "white" : color}
        />
      );
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={"white"}
      inactiveColor={"grey"}
      renderIcon={(props) => getTabBarIcon(props)}
      style={{ marginTop: -10, backgroundColor: "transparent" }}
      indicatorStyle={{ backgroundColor: "white" }}
      tabStyle={styles.bubble}
      labelStyle={styles.noLabel}
    />
  );
  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <Text>alishn</Text>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
    display: "none",
    height: 0,
  },
  bubble: {
    // backgroundColor: "transparent",
    // paddingHorizontal: 2,
    // paddingVertical: 12,
    // borderRadius: 10,
  },
});
