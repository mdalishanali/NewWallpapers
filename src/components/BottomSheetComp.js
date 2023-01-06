import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useMemo, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
const BottomSheetComp = () => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["60%"];
  return (
    <View>
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>BottomSheetComp</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetComp;

const styles = StyleSheet.create({});
