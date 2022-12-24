import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  const data = [
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 1,
    },
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 2,
    },
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 3,
    },
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 4,
    },
    {
      img: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      title: "lorem",
      id: 5,
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
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
  img: {
    height: 100,
    width: 50,
    backgroundColor: "red",
  },
});
