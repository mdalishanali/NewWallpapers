import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOptacity,
  TouchableOpacity,
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
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Animated, { color } from "react-native-reanimated";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Toast from "react-native-toast-message";

// ads
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-9053239820097034/4650297079";

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});
// ads
const Details = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setAdLoaded(true);
        rewarded.show();
      }
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {}
    );
    rewarded.load();
    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const sheetRef = useRef(null);
  const wallpaperRef = useRef(null);

  const [progress, setProgress] = useState(false);
  const snapPoints = ["20%", "30%"];
  const wallpaperPoints = ["40%", "50%"];

  const [loading, setLoading] = useState(true);
  const { width, height } = Dimensions.get("window");

  const route = useRoute();
  const item = route.params.item;
  const { src, id } = item;

  const setWallpaper = (screen) => {
    setProgress(true);
    wallpaperRef.current?.close();
    try {
      WallPaperManager.setWallpaper(
        {
          uri: src.portrait || src.original,
          screen: screen,
        },
        (res) => {
          setProgress(false);
          Toast.show({
            type: "success",
            position: "top",
            autoHide: true,
            visibilityTime: 2000,
            text1: "Wallpaper Successfully Set!",
            text2: "Success",
          });
        }
      );
    } catch (error) {
      setProgress(false);
      Toast.show({
        type: "error",
        position: "top",
        autoHide: true,
        visibilityTime: 2000,
        text1: "Something went wrong",
        text2: "Error",
        onShow: () => {
          wallpaperRef.current?.close();
        },
      });
    }
  };

  useEffect(() => {
    sheetRef.current?.present();
  }, []);

  const handleOpenWallpaperDialog = useCallback((index) => {
    wallpaperRef.current?.present();
  }, []);

  return (
    <View>
      <BottomSheetModalProvider>
        <View>
          {loading ? <ActivityIndicator /> : null}
          <ExpoFastImage
            uri={src.portrait || src.original}
            cacheKey={id}
            style={{
              width: width,
              height: height + 10,
              opacity: 0.85,
              justifyContent: "center",
              resizeMode: "cover",
              borderRadius: 10,
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
            enablePanDownToClose={false}
            backgroundComponent={() => <View style={styles.contentContainer} />}
            handleComponent={() => (
              <View style={styles.closeLineContainer}>
                <View style={[styles.closeLine, { display: "none" }]}></View>
              </View>
            )}
          >
            <View
              style={{
                width: width,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={handleOpenWallpaperDialog}
                style={[
                  styles.btnContainer,
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0e1116",
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "white",
                  },
                ]}
              >
                <Octicons name="download" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleOpenWallpaperDialog}
                style={[
                  styles.btnContainer,
                  {
                    height: 70,
                    width: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FF4E50",
                    borderRadius: 50,
                    borderWidth: 5,
                    borderColor: "white",
                  },
                ]}
              >
                {progress ? (
                  <ActivityIndicator size="large" color={"white"} />
                ) : (
                  <MaterialIcons name="now-wallpaper" size={30} color="white" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleOpenWallpaperDialog}
                style={[
                  styles.btnContainer,
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0e1116",
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "white",
                  },
                ]}
              >
                <MaterialCommunityIcons name="share" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </BottomSheetModal>

          <BottomSheetModal
            ref={wallpaperRef}
            snapPoints={wallpaperPoints}
            index={0}
            enablePanDownToClose={true}
            backgroundComponent={() => (
              <View style={[styles.contentContainer]} />
            )}
            handleComponent={() => (
              <View style={styles.closeLineContainer}>
                <View style={[styles.closeLine, {}]}></View>
              </View>
            )}
          >
            <View>
              <View>
                <Text style={styles.headerText}>Set Wallpaper</Text>

                <View style={[styles.buttonListContainer, {}]}></View>
                <TouchableOpacity
                  onPress={() => {
                    setWallpaper("home");
                  }}
                  style={[styles.wallpaperOption, {}]}
                >
                  <AntDesign name="home" size={26} color="white" />
                  <Text style={styles.whiteText}>Home Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setWallpaper("lock")}
                  style={[styles.wallpaperOption, {}]}
                >
                  <AntDesign name="lock" size={26} color="white" />
                  <Text style={styles.whiteText}>Lock Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setWallpaper("both")}
                  style={[styles.wallpaperOption, {}]}
                >
                  <Entypo name="mobile" size={26} color="white" />
                  <Text style={styles.whiteText}>Both</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default gestureHandlerRootHOC(Details);

const styles = StyleSheet.create({
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "transparent",
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
  btnContainer: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  headerText: {
    marginTop: 10,
    marginLeft: 40,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonListContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  whiteText: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },
  wallpaperOption: {
    marginHorizontal: 10,
    height: 45,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    gap: 55,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#36414F",
    borderRadius: 20,
  },
});
