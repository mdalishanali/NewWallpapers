import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ExpoFastImage from "expo-fast-image";

const Home = () => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  // const
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button
        title="Press button"
        onPress={() => {
          navigateToDetails;
        }}
      />
      <ExpoFastImage
        uri="https://imagecolorpicker.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-Who-we-are%201.705b4fd1.png&w=640&q=75" // image address
        cacheKey="uniquekey45" // could be a unque id
        style={styles.img}
        onLoadStart={(e) => console.log("loading start")}
        // onLoad
        // style={"custom style"} // your custom style object
        // any supported props by Image
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 50,
    backgroundColor: "red",
  },
});
