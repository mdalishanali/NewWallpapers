import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const NewWallpaper = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getCuratedImages = async () => {
    const url = `https://api.pexels.com/v1/curated/?page=${page}&per_page=20&orientation=portrait&size=large`;
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
    });
    const { photos } = data;
    setPhotos(photos);
  };
  
  return (
    <View>
      <Text>NewWallpaper</Text>
    </View>
  );
};

export default NewWallpaper;

const styles = StyleSheet.create({});
