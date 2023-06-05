import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleCompletedTodo } from "../redux/slice/TodoSlice";

export default function MyCheckbox({ isCompleted, id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, isCompleted && styles.checkboxChecked]}
      onPress={() => {
        dispatch(toggleCompletedTodo(id));
      }}
    >
      {isCompleted && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#98A2B3",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#7F56D9",
  },
});
