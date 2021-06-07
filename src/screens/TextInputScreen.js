import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {name.length > 5 ? null : (
        <Text>Password must be longer than 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
  },
});
export default TextInputScreen;
