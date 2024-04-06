import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  AddIcon,
  BackGround,
  BackIcon,
  BlueAngle,
  GoldStar,
  StarIcon,
  UpIcon,
  WhiteAngle,
} from '../components/utils/images';
import messages from '../assets/Data/messages.json';
import CallModal from '../components/CallModal';
const ChatScreen = ({ route, navigation }) => {
  const { item } = route.params;

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
              backgroundColor: isMyMessage(message.user.id)
                ? '#2377F1'
                : 'white',
              alignSelf: isMyMessage(message.user.id)
                ? 'flex-end'
                : 'flex-start',
            },
          ]}
        >
          <Text
            style={{
              color: isMyMessage(message.user.id === 'u1')
                ? 'white'
                : '#0C2338',
              fontSize: 16,
              letterSpacing: -0.22,
              lineHeight: 22,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
        {isMyMessage(message.user.id) ? (
          <Image
            style={{
              alignSelf: 'flex-end',
              bottom: 12,
              right: 15,
              overflow: 'hidden',
              position: 'absolute',
            }}
            source={BlueAngle}
          />
        ) : (
          <Image
            style={{
              alignSelf: 'flex-start',
              bottom: 12,
              left: 12,
              overflow: 'hidden',
              position: 'absolute',
            }}
            source={WhiteAngle}
          />
        )}
      </View>
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  const handleAudioPress = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('audio'); // Navigate to audio screen
  };
  const handleVideoPress = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('video'); // Navigate to video screen
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={BackIcon} />
        </Pressable>
        <Image source={item.avatar} />

        <Text
          style={{
            fontSize: 16,
            color: '#07162D',
            fontWeight: '600',
          }}
        >
          {item.name}
        </Text>
        <View style={{ flexDirection: 'row', gap: 2 }}>
          <Image source={GoldStar} style={{ width: 14, height: 14 }} />
          <Text
            style={{
              fontSize: 14,
              color: '#07162D',
              fontWeight: '600',
            }}
          >
            {item.rating}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#F0F1F3',
          marginTop: 10,
        }}
      />
      <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Session schedule</Text>
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
              backgroundColor: '#F0F1F3',
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 10,
            }}
          >
            <TextInput
              placeholder='Mar 24, 9:41 AM'
              placeholderTextColor={'#07162D'}
              style={{
                fontSize: 17,
                color: '#07162D',
                fontWeight: '500',
                lineHeight: 22,
              }}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#2377F1',
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
              color: 'white',
            }}
          >
            Join
          </Text>
        </Pressable>
      </View>
      <View>
        <ImageBackground
          source={BackGround}
          style={{ width: '100%', height: '100%' }}
        >
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Chat message={item} />}
            inverted
            showsVerticalScrollIndicator={false}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingBottom: 32,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingTop: 12,
          paddingLeft: 20,
          paddingRight: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <Image source={AddIcon} />
        <TextInput
          style={{
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 58,
            backgroundColor: '#E3E4E6',
            borderColor: '#E3E4E6',
            borderWidth: 1,
            fontSize: 16,
            color: '#979DA7',
            lineHeight: 21,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            paddingVertical: 6,
            paddingHorizontal: 9,
            gap: 10,
            borderRadius: 100,
            backgroundColor: '#2377F1',
            width: 38,
            height: 38,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
          }}
        >
          <Image source={UpIcon} />
        </TouchableOpacity>
      </View>
      <CallModal
        visible={modalVisible}
        onAudio={handleAudioPress}
        onVideo={handleVideoPress}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 6,
    borderRadius: 18,
    marginBottom: 16,
    maxWidth: '70%',
    marginHorizontal: 16,
  },
});
