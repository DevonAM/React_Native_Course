import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: "30" },
    { name: "friend #2", age: "49" },
    { name: "friend #3", age: "23" },
    { name: "friend #4", age: "45" },
    { name: "friend #5", age: "67" },
    { name: "friend #6", age: "21" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 60,
  },
});

export default ListScreen;
