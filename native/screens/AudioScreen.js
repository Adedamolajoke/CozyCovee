import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  Avatar,
  BackGround,
  BackIcon,
  EndCallIcon,
  MicOffIcon,
  SecondAvatar,
  VolumeHighIcon,
} from '../components/utils/images';

const AudioScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackGround} style={{ flex: 1 }}>
      <SafeAreaView />
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={{ left: 16 }} />
      </Pressable>
      <View style={{ alignSelf: 'center', top: 6, gap: 16, marginBottom: 43 }}>
        <Text
          style={{
            fontSize: 22,
            color: '#07162D',
            fontWeight: '600',
          }}
        >
          Didi Noor
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18,
            color: '#646D7B',
            textAlign: 'center',
          }}
        >
          0:16
        </Text>
      </View>
      <Image
        source={SecondAvatar}
        style={{
          alignSelf: 'center',
          height: 108,
          width: 108,
          borderRadius: 100,
        }}
      />
      <View
        style={{
          height: '15%',
          width: '100%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 60,
        }}
      >
        <Pressable
          style={{
            width: 56,
            height: 56,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F1F3',
          }}
        >
          <Image source={VolumeHighIcon} />
        </Pressable>
        <Pressable
          style={{
            width: 56,
            height: 56,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F1F3',
          }}
        >
          <Image source={MicOffIcon} />
        </Pressable>
        <Pressable>
          <Image source={EndCallIcon} />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default AudioScreen;

const styles = StyleSheet.create({});
