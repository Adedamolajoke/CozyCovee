import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  EndCallIcon,
  MicOffIcon,
  VolumeHighIcon,
} from '../components/utils/images';

const VideoScreen = () => {
  return (
    <View>
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
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
