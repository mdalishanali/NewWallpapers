import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOptacity,
} from "react-native";
import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import ExpoFastImage from "expo-fast-image";
import { useRoute } from "@react-navigation/native";
import WallPaperManager from "@ajaybhatia/react-native-wallpaper-manager";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Animated, { color } from "react-native-reanimated";

const Details = () => {
  const sheetRef = useRef(null);
  const wallpaperRef = useRef(null);

  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["15%", "30%"];
  const wallpaperPoints = ["30%", "50%"];

  const [loading, setLoading] = useState(false);
  const { width, height } = Dimensions.get("window");

  const route = useRoute();
  const item = route.params.item;
  const { img, id } = item;

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

  useEffect(() => {
    sheetRef.current?.present();
  }, []);

  const handleOpenWallpaperDialog = useCallback((index) => {
    wallpaperRef.current?.present();
    // setIsOpen(true);
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <BottomSheetModalProvider>
        <View>
          {loading ? <ActivityIndicator /> : null}
          <Text>Details</Text>
          <ExpoFastImage
            uri={img}
            cacheKey={id}
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
          <BottomSheetModal
            ref={sheetRef}
            snapPoints={snapPoints}
            index={0}
            onChange={handleSheetChanges}
            enablePanDownToClose={false}
            backgroundComponent={() => <View style={styles.contentContainer} />}
            handleComponent={() => (
              <View style={styles.closeLineContainer}>
                <View style={styles.closeLine}></View>
              </View>
            )}
          >
            <View>
              <Button title="Download" onPress={handleOpenWallpaperDialog} />
              <Button
                title="Save Wallpaper"
                onPress={handleOpenWallpaperDialog}
              />
              <Button title="Share" onPress={handleOpenWallpaperDialog} />
            </View>
          </BottomSheetModal>

          <BottomSheetModal
            ref={wallpaperRef}
            snapPoints={wallpaperPoints}
            index={0}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            backgroundComponent={() => <View style={styles.contentContainer} />}
            handleComponent={() => (
              <View style={styles.closeLineContainer}>
                <View style={styles.closeLine}></View>
              </View>
            )}
          >
            <View>
              <Text>Set Wallpaper</Text>
              <Text>Home Screen</Text>
              <Text>Lock Screen</Text>
              <Text>Both Screen</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </>
  );
};

export default gestureHandlerRootHOC(Details);

const styles = StyleSheet.create({
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "black",
  },
  closeLineContainer: {
    alignSelf: "center",
  },
  closeLine: {
    width: 60,
    textAlign: "center",
    alignItems: "center",
    height: 6,
    borderRadius: 3,
    backgroundColor: "white",
    marginTop: 9,
  },
});
