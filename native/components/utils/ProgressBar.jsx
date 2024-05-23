import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import tailwind from 'twrnc'


const ProgressBar = ({width}) => {
    const barWidth = useRef(new Animated.Value(0)).current;
    const progressPercent = barWidth.interpolate({
        inputRange: [0, width],
        outputRange: ["0%", width +'%'],
    });

    useEffect( () => {
        // animatedController.setValue(0)

        Animated.timing(barWidth, {
            duration: 5000,
            toValue: width,
            useNativeDriver: false
        }).start();
        },
    [])
  return (
    <>
    <View style={tailwind`w-[100%] h-2 bg-[#ECEDEF] rounded`}>
        <Animated.View  style={[StyleSheet.absoluteFill, tailwind`rounded`, {backgroundColor: "#2377F1", width: progressPercent}]}/>
    </View>
    
    </>
  )
}

export default ProgressBar