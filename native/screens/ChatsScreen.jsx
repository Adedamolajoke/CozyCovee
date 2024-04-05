import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Avatar,
  NotifyIcon,
  SearchIcon,
  StarIcon,
} from '../components/utils/images';

// Define your personal and counsellor data here
const personalData = [
  {
    id: 'u1',
    name: 'Didi Noor',
    avatar: Avatar,
    time: '1:02 PM',
    message: 'There’s a meeting soon',
    rating: '4.5 ',
  },
  {
    id: 'u2',
    name: 'Tris Tap',
    avatar: Avatar,
    time: '1:02 PM',
    message: 'There’s a meeting soon',
    rating: '4.5 ',
  },
];
const counsellorData = [
  {
    id: 'u3',
    name: 'Tris Tap',
    avatar: Avatar,
    time: '1:02 PM',
    message: 'There’s a meeting soon',
    rating: '4.5 ',
  },
  {
    id: 'u4',
    name: 'Tris Tap',
    avatar: Avatar,
    time: '1:02 PM',
    message: 'There’s a meeting soon',
    rating: '4.5 ',
  },
];

const ChatsScreen = ({ navigation }) => {
  const [mode, setMode] = useState('personal'); // State to track current mode

  // Function to handle mode switch
  const toggleMode = () => {
    setMode(mode === 'personal' ? 'counsellor' : 'personal');
  };

  // Function to get data based on current mode
  const getData = () => {
    return mode === 'personal' ? personalData : counsellorData;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 16,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            lineHeight: 32,
          }}
        >
          Chats
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <Image style={{ height: 24, width: 24 }} source={SearchIcon} />
          <Image style={{ height: 24, width: 24 }} source={NotifyIcon} />
          <Image source={Avatar} />
        </View>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#F0F1F3' }} />
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            backgroundColor: '#F0F1F3',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 1,
            marginTop: 24,
            borderRadius: 8,
          }}
        >
          <Pressable
            style={[
              styles.modeButton,
              mode === 'personal' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setMode('personal')}
          >
            <Text>Personal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.modeButton,
              mode === 'counsellor'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => setMode('counsellor')}
          >
            <Text>Counsellor</Text>
          </Pressable>
        </View>
      </View>

      {/* Display data based on current mode */}
      <View style={{ marginTop: 25 }}>
        {getData().map((item, index) => (
          <Pressable
            onPress={() => navigation.navigate('chatroom', { item })}
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              marginBottom: 35,
            }}
          >
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Image
                style={{
                  height: 54,
                  width: 54,
                  borderRadius: 54,
                }}
                source={item.avatar}
              />
              <View style={{ gap: 7 }}>
                <View
                  style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#07162D',
                      fontWeight: '500',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Image
                    style={{
                      height: 14,
                      width: 14,
                    }}
                    source={StarIcon}
                  />
                  <Text
                    style={{
                      color: '#07162D',
                      fontWeight: '400',
                      lineHeight: 16,
                    }}
                  >
                    {item.rating}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#646D7B',
                    fontSize: 15,
                    fontWeight: '400',
                  }}
                >
                  {item.message}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 18,
                color: '#646D7B',
                fontWeight: '400',
              }}
            >
              {item.time}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modeButton: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    width: '49%',
    elevation: 10,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
  },
  inactiveButton: {
    backgroundColor: '#F0F1F3',
  },
});

export default ChatsScreen;
