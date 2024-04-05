import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Chat = ({ message }) => {
  const isMyMessage = () => {
    return message?.user?.id === 'u1';
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: isMyMessage() ? 'white' : '#2377F1',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
          },
        ]}
      >
        <Text>{message.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
   
  },
});
