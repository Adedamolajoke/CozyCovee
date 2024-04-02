import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import tailwind from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

function CustomButton({ title, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const gradientColors = title === "Login" ? ["#FFFF", "#FFFF"] : ["#2377f1", "#2377f1"];

  const activeColors = title === "Login" ? ["#FFFF", "#FFFF"] : ["#2377f1", "#2377f1"];

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <LinearGradient
        colors={isPressed ? activeColors : gradientColors}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={tailwind`px-10 py-3 mb-3 rounded-lg w-[100%] ${isPressed ? "shadow-sm":""} ${
          title === "Next" ? "" : "border-[0.7px] border-[#dadcdf]"
        }`}
      >
        <Text
          style={tailwind`text-lg text-center ${
            title === "Login" ? "text-[#07162d]" : "text-white"
          }`}
        >
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}

export default CustomButton;
