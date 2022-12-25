import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  const imgData = [
    {
      img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
      title: "lorem",
      id: Math.random(),
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
    }
  ];
  const { height, width } = Dimensions.get("screen");
  const [data, setData] = useState(imgData);
  const fetchMore = () => {
    // setData([...data, imgData]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          flexDirection: "column",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
        data={data}
        // style={styles.list}
        numColumns={2}
        initialNumToRender={5}
        onEndReached={fetchMore}
        renderItem={({ item, index }) => {
          return <ImageCard key={index} item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
  },
  list: {
    // display: "flex",
    // flexDirection: "row",
    // width: { width },
    // display: "flex",
    // flexWrap: "wrap",
    // padding: 10,
  },
});
