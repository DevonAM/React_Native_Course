import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutsScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 400,
    borderWidth: 4,
    borderColor: "black",
  },
  viewOne: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  viewTwo: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    top: 100,
  },
  viewThree: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
});

export default LayoutsScreen;
