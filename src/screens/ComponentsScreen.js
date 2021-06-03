import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textHeaderStyle}>
        Getting started with React Native
      </Text>
      <Text style={styles.textSubHeaderStyle}>With Devon AcreeMeza</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeaderStyle: {
    fontSize: 40,
  },
  textSubHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
