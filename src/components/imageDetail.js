import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.image} />
      <Text>{props.title}</Text>
      <Text>Score - {props.score}</Text>
    </View>
  );
};

export default ImageDetail;
