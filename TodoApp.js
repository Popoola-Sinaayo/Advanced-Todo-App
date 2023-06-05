import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "./Components/CustomText";
import Todo from "./Components/Todo";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllTodo } from "./redux/slice/TodoSlice";
import avatars from "./assets/Avatars.png";
import { useState } from "react";
import TodoModal from "./Components/AddTodoModal";

export default function TodoApp() {
  const { todos } = useSelector((state) => state.todo);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <>
      <ScrollView style={styles.container}>
        <CustomText
          align="center"
          text="Task Details"
          weight="500"
          size={16}
          marginVertical={30}
        />
        <CustomText
          text="Task Title"
          align="left"
          alignContainer="center"
          width="90%"
          color="#5D6B98"
          size={16}
        />
        <CustomText
          text="NFT Web App Prototype"
          weight="600"
          align="left"
          alignContainer="center"
          marginVertical={20}
          width="90%"
          color="#1D2939"
          size={20}
        />
        <CustomText
          text="Descriptions"
          align="left"
          alignContainer="center"
          width="90%"
          color="#5D6B98"
          size={16}
        />
        <CustomText
          text="Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT.."
          align="left"
          alignContainer="center"
          width="90%"
          weight="500"
          marginVertical={10}
          size={16}
        />
        <View style={styles.avatarContainer}>
          <Image source={avatars} />
        </View>
        <View>
          <View style={styles.todoHeader}>
            <CustomText
              text="Task List"
              color="#5D6B98"
              size={14}
              weight="500"
              align="left"
            />
            <TouchableOpacity onPress={() => dispatch(deleteAllTodo())}>
              <AntDesign name="delete" size={24} color="#F30000" />
            </TouchableOpacity>
          </View>
          {todos.map((todo) => {
            return <Todo key={todo?.id} {...todo} />;
          })}
          <TouchableOpacity onPress={() => setShowTodoModal(true)}>
            <View style={styles.addText}>
              <AntDesign
                name="plus"
                size={24}
                color="#ABB6C8"
                style={{ marginRight: 20 }}
              />
              <CustomText
                align="left"
                text="Add Task"
                size={16}
                color="#ABB6C8"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showTodoModal && <TodoModal setShowTodoModal={setShowTodoModal} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 40,
  },
  avatarContainer: {
    width: "90%",
    alignSelf: "center",
  },
  todoHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  addText: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: "#F9F9FB",
    width: "90%",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 16,
    paddingLeft: 15,
  },
  addIcon: {
    marginRight: 30,
  },
});
