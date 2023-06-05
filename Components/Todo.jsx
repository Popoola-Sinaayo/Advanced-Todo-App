import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import MyCheckbox from "./MyCheckBox";

const Todo = ({ id, todo, isCompleted }) => {
  const [current, setCurrent] = useState(false);
  return (
    <View
      style={styles.container}
    >
      <View style={styles.checkboxContainer}>
        <MyCheckbox id={id} isCompleted={isCompleted} />
        <Text style={styles.checkboxLabel}>{todo}</Text>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  container: {
    paddingVertical: 20,
    backgroundColor: "#F9F9FB",
    width: "90%",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 16,
  },
});
