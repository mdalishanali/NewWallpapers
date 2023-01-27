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
const ImageCard = ({ item }) => {
  const { src, id } = item;
  const [loading, setLoading] = useState(true);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  const imageDetails = () => {
    navigation.navigate("Details", { item });
  };

  return (
    <View
      style={{
        borderColor: "white",
        borderRadius: 5,
        paddingBottom: 2,
        opacity: 1,
        marginHorizontal: 8,
        marginVertical: 15,
        flex: 1,
        justifyContent: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{ position: "absolute", zIndex: 1, left: 55 }}
          color="pink"
        />
      ) : null}

      <TouchableOpacity onPress={() => imageDetails()}>
        <ExpoFastImage
          uri={src.portrait || src.original}
          cacheKey={id}
          style={{
            width: width / 2 - 20,
            height: height / 2 - 50,
            opacity: 0.85,
            justifyContent: "center",
            borderRadius: 5,
          }}
          onLoadStart={(e) => {
            setLoading(true);
          }}
          onLoadEnd={(e) => {
            setLoading(false);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
