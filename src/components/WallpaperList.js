import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "./ImageCard";
import MasonryList from "@react-native-seoul/masonry-list";

const WallpaperList = ({ foo }) => {
  const navigation = useNavigation();
  useEffect(() => {}, [foo]);
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  const imgData = [
    {
      img: "https://i.pinimg.com/736x/73/22/fd/7322fd490690fc770eea9f1bfc3fce8b.jpg",
      title: "lorem",
      id: 48989,
    },
    {
      img: "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1671966568/download_nfmcjb.jpg",
      title: "lorem",
      id: 1547878,
    },
    {
      img: "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1671966460/Pin_by_Apurva_on_F_in_2022___Iphone_wallpaper_earth_Galaxy_phone_wallpaper_Flash_wallpaper_in_2022___Galaxy_phone_wallpaper_Dark_phone_wallpapers_Flash_wallpaper_pusfnr.jpg",
      title: "lorem",
      id: 5443,
    },
    {
      img: "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1671966280/IPHONE_11_wallpaper_fg4xgt.jpg",
      title: "lorem",
      id: 489889,
    },
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 8580,
    },
    {
      img: "https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?cs=srgb&dl=pexels-og-mpango-4090599.jpg&fm=jpg",
      title: "lorem",
      id: 5543,
    },
    {
      img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
      title: "lorem",
      id: 5414,
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg",
      title: "lorem",
      id: 14875,
    },
    {
      img: "https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?cs=srgb&dl=pexels-og-mpango-4090599.jpg&fm=jpg",
      title: "lorem",
      id: 54543,
    },
    {
      img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
      title: "lorem",
      id: 1564,
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg",
      title: "lorem",
      id: 155,
    },
    {
      img: "https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?cs=srgb&dl=pexels-og-mpango-4090599.jpg&fm=jpg",
      title: "lorem",
      id: 545543,
    },
    {
      img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
      title: "lorem",
      id: 189564,
    },
  ];
  const { height, width } = Dimensions.get("screen");
  const [data, setData] = useState(imgData);
  const fetchMore = () => {
    // setData([...data, imgData]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{ alignSelf: "stretch" }}
        contentContainerStyle={{
          flexDirection: "column",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
        initialNumToRender={5}
        onEndReached={fetchMore}
        renderItem={({ item, index }) => {
          return <ImageCard key={index} item={item} />;
        }}
      />
    </View>
  );
};

export default WallpaperList;

const styles = StyleSheet.create({});
