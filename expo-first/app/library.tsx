import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import BottomSheetNav from "@/components/BottomSheet";

const Library = () => {
  const [isBottom, setIsBottom] = useState(false);
  const handleClose = () => setIsBottom(false);
  console.log(isBottom);
  return (
    <View style={{flex: 1}}>
      <Text>Library</Text>
      <Button
        title="Show Bottom Sheet"
        onPress={() => setIsBottom(true)}
      ></Button>
      {/* {isBottom && <BottomSheetNav onClose={handleClose}><Text>Heyss</Text></BottomSheetNav>} */}
      {isBottom && (
        <BottomSheetNav onClose={handleClose}>
          <Text>Heyss</Text>
        </BottomSheetNav>
      )}
    </View>
  );
};

export default Library;
