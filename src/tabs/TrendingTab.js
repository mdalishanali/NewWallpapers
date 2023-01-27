import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import ImageCard from "../components/ImageCard";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function TrendingTab() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { height, width } = Dimensions.get("window");
  const [page, setPage] = useState(1);

  const client = createClient(
    "563492ad6f91700001000001d4db4e2231f140c2aa37df6d8934cf5f"
  );

  useEffect(() => {
    getImages(page);
  }, [page]);

  const getImages = (page) => {
    try {
      setLoading(true);
      const query = "android wallpaper";
      client.photos.search({ query, per_page: 20, page: page }).then((data) => {
        const { photos } = data;
        setImages([...images, ...photos]);
        setLoading(false);
      });
    } catch (error) {
      setLoading(true);
      Toast.show({
        type: "error",
        position: "top",
        autoHide: true,
        visibilityTime: 2000,
        text1: "Something went wrong",
        text2: "Error",
      });
    }
  };

  const fetchMore = () => {
    Toast.show({
      type: "success",
      position: "bottom",
      autoHide: true,
      visibilityTime: 2000,
      text1: "Loading more images!",
      text2: "Success",
    });
    setPage((page) => page + 1);
  };

  return (
    <View>
      {isLoading && (
        <View
          style={{
            position: "absolute",
            top: height / 3,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          {isLoading ? <ActivityIndicator size="large" /> : null}
        </View>
      )}
      {images.length ? (
        <View>
          <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={{ alignSelf: "stretch" }}
            contentContainerStyle={{
              flexDirection: "column",
              maxWidth: "100%",
              justifyContent: "space-between",
            }}
            initialNumToRender={10}
            onEndReached={fetchMore}
            renderItem={({ item, index }) => {
              return <ImageCard key={index} item={item} />;
            }}
          />
        </View>
      ) : null}
    </View>
  );
}
