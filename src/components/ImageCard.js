import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpoFastImage from "expo-fast-image";

const ImageCard = ({ item: { id, title, img } }) => {
  return (
    <View>
      <ExpoFastImage
        uri={img}
        cacheKey={id}
        style={styles.img}
        onLoadStart={(e) => console.log("loading start")}
        onProgress={(e) =>
          console.log("Progress is", e.nativeEvent.loaded / e.nativeEvent.total)
        }
        onLoad={(e) =>
          console.log(
            "laoding progress",
            e.nativeEvent.loaded / e.nativeEvent.total
          )
        }
        onLoadEnd={(e) => console.log("loading ended")}
      />
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
