import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MicIcon, RightIcon, WebCamIcom } from './utils/images';
import { useNavigation } from '@react-navigation/native';
const CallModal = ({ visible, onAudio, onVideo }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              width: 32,
              height: 6,
              borderRadius: 10,
              backgroundColor: '#E2E3E5',
              top: -10,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 18,
              marginTop: 26,
              marginBottom: 46,
              textAlign: 'center',
            }}
          >
            Join Counsellor Session
          </Text>

          <View
            style={{
              gap: 24,
            }}
          >
            <Pressable
              onPress={onAudio}
              style={{
                padding: 16,
                borderRadius: 18,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F0F1F3',
              }}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
              >
                <Image source={MicIcon} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 20,
                  }}
                >
                  Join with only audio
                </Text>
              </View>
              <Image source={RightIcon} />
            </Pressable>
            <Pressable
              onPress={onVideo}
              style={{
                padding: 16,
                borderRadius: 18,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#F0F1F3',
              }}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
              >
                <Image source={WebCamIcom} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 20,
                  }}
                >
                  Join with Audio & Video
                </Text>
              </View>
              <Image source={RightIcon} />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CallModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  },
  modalContent: {
    width: '100%', // Adjust as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    height: '50%',
    bottom: 0,
    position: 'absolute',
  },
});
