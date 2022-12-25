import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ExpoFastImage from "expo-fast-image";
import { COLORS } from "./../constants/index";
import { useNavigation } from "@react-navigation/native";
const ImageCard = ({ item: { id, title, img } }) => {
  const [loading, setLoading] = useState(false);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  const imageDetails = (img) => {
    navigation.navigate("Details", { img: img });
  };
  return (
    <View
      style={{
        height: height / 2 - 10,
        width: width / 2 - 18,
        backgroundColor: COLORS.primary,
        borderColor: "white",
        borderRadius: 5,
        paddingBottom: 2,
        opacity: 1,
        marginHorizontal: 8,
        marginVertical: 15,
      }}
    >
      {loading && (
        <ActivityIndicator size="large" style={{ flex: 1 }} color="pink" />
      )}

      <TouchableOpacity onPress={() => imageDetails(img)}>
        <ExpoFastImage
          uri={img}
          cacheKey={id}
          style={{
            width: width / 2 - 20,
            height: height / 2 - 50,
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
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            textAlign: "center",
            padding: 10,
            fontWeight: "10",
          }}
        >
          Nature Picture
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
