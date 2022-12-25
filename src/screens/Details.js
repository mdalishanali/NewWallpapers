import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import ExpoFastImage from "expo-fast-image";
import { useRoute } from "@react-navigation/native";
import WallPaperManager from "@ajaybhatia/react-native-wallpaper-manager";
const Details = () => {
  const [loading, setLoading] = useState(false);
  const { width, height } = Dimensions.get("window");

  const route = useRoute();
  const img = route.params.img;

  const setWallpaper = () => {
    try {
      WallPaperManager.setWallpaper(
        {
          uri: img,
          screen: "both",
        },
        (res) => console.log(res)
      );
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <ScrollView>
      <View>
        {loading ? <ActivityIndicator /> : null}
        <Text>Details</Text>
        <ExpoFastImage
          uri={img}
          cacheKey={Math.random()}
          style={{
            width: width - 20,
            height: height - 200,
            opacity: 0.85,
            justifyContent: "center",
          }}
          onLoadStart={(e) => {
            setLoading(true);
          }}
          onLoadEnd={(e) => {
            setLoading(false);
          }}
        />
      </View>
      <Button
        style={{ marginTop: 120 }}
        title="Set Wallpaper"
        onPress={setWallpaper}
      />
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
