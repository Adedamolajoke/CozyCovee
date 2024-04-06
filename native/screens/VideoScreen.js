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
  BackIcon,
  BackgroundVideo,
  CallPerson,
  EndCallIcon,
  MicOffIcon,
  VideoCamOffIcon,
  VolumeHighIcon,
} from '../components/utils/images';

const VideoScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={BackgroundVideo}
      style={{ flex: 1, width: '100%' }}
    >
      <SafeAreaView />

      <Pressable onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={{ left: 16 }} />
      </Pressable>
      <View style={{ alignSelf: 'center', top: 6, gap: 16, marginBottom: 43 }}>
        <Text
          style={{
            fontSize: 22,
            color: 'black',
            fontWeight: '600',
          }}
        >
          Didi Noor
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18,
            color: 'black',
            textAlign: 'center',
          }}
        >
          0:16
        </Text>
      </View>

      <Image
        source={CallPerson}
        style={{
          right: 16,
          position: 'absolute',
          bottom: '22%',
        }}
      />
      <View
        style={{
          height: '20%',
          width: '100%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
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
          <Image source={VideoCamOffIcon} />
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

export default VideoScreen;

const styles = StyleSheet.create({});
