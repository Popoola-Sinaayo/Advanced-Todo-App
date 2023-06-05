import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = ({
  align,
  size,
  color,
  text,
  weight,
  marginVertical,
  width,
  alignContainer,
}) => {
  if (!align) {
    console.error("please specify align");
  }
  return (
    <View style={{ width: width, alignSelf: alignContainer }}>
      <Text
        style={{
          textAlign: align,
          fontSize: size,
          color: color,
          fontWeight: weight,
          marginVertical: marginVertical ? marginVertical : 5,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomText;

