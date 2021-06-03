import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>Image Screen</Text>
      <ImageDetail
        title="Forest"
        score="9"
        image={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        score="6"
        image={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        score="3"
        image={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 40,
  },
});

export default ImageScreen;
