import React from "react";
import {
  Text,
} from "react-native";
import TodoApp from "./TodoApp";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <TodoApp />
      </PersistGate>
    </Provider>
  );
}
