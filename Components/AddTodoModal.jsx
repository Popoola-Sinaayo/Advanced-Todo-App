import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleCompletedTodo } from "../redux/slice/TodoSlice";

const AddTodoModal = ({ setShowTodoModal }) => {
  const [todoObject, setTodoObject] = useState({
    id: "",
    todo: "",
    isCompleted: false,
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Todo here"
        style={styles.textInput}
        value={todoObject.todo}
        onChangeText={(data) => {
          setTodoObject((prevData) => {
            return { ...prevData, id: Math.random(), todo: data };
          });
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(todoObject);
          dispatch(addTodo(todoObject));
          setShowTodoModal(false);
        }}
      >
        <View
          style={styles.todoTextContainer}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Add Todo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000080",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  todoTextContainer: {
    backgroundColor: "green",
    marginVertical: 20,
    paddingVertical: 15,
    width: 200,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: "white",
    paddingVertical: 15,
    width: "90%",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
