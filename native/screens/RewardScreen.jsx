import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  Avatar,
  CheckIcon,
  GoldStar,
  GymIcon,
  NotifyIcon,
  PeopleIcon,
  SearchIcon,
} from '../components/utils/images';
import { LinearGradient } from 'expo-linear-gradient';

const RewardScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
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
          Rewards
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

      <LinearGradient
        colors={['#BB23F1', '#2377F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          paddingHorizontal: 16,
          paddingVertical: 19,
          borderRadius: 12,
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={GoldStar} style={{ height: 24, width: 24 }} />
            <Text
              style={{
                color: '#FFFDFD',
                fontSize: 40,
                fontWeight: '600',
                lineHeight: 48,
              }}
            >
              45
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#FFFDFDA8',
            }}
          >
            Points Earned
          </Text>
        </View>
        <Pressable
          style={{
            paddingHorizontal: 11,
            paddingVertical: 8,
            borderRadius: 5,
            backgroundColor: '#FFFDFD24',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            View Insights
          </Text>
        </Pressable>
      </LinearGradient>
      <Pressable
        style={{
          paddingHorizontal: 16,
          borderRadius: 5,
          backgroundColor: '#F0F1F3',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          flexDirection: 'row',
          marginHorizontal: 16,
          height: 44,
          marginTop: 24,
        }}
      >
        <Image source={PeopleIcon} />
        <Text
          style={{
            color: '#2377F1',
            fontSize: 14,
            lineHeight: 24,
          }}
        >
          Earn more Points by inviting your friends
        </Text>
      </Pressable>
      <View
        style={{
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: '#DADCDF',
          borderRadius: 10,
          paddingVertical: 16,
          alignItems: 'center',
          gap: 30,
          marginTop: 28,
          backgroundColor: 'white',
        }}
      >
        <View style={{ gap: 20, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
            }}
          >
            Daily Reward
          </Text>
          <View style={{ height: 1, width: 365, backgroundColor: '#DADCDF' }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Image source={GoldStar} style={{ height: 32, width: 32 }} />
          <Text
            style={{
              fontSize: 40,
              fontWeight: '600',
              lineHeight: 48,
              color: '#07162D',
            }}
          >
            5
          </Text>
        </View>
        <Pressable
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#DADCDF',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
              color: '#07162D',
            }}
          >
            Claim in: 12hr 32min
          </Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 28, marginHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            lineHeight: 32,
            marginBottom: 20,
          }}
        >
          Completed challenges
        </Text>

        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              gap: 12,
            }}
          >
            <Image source={GymIcon} />
            <Text
              style={{
                fontSize: 16,
                color: '#07162D',
                fontWeight: '500',
                lineHeight: 24,
              }}
            >
              50 Push ups
            </Text>
            <Image
              source={CheckIcon}
              style={{ height: 24, width: 24, left: -6 }}
            />
          </View>
          <Pressable
            style={{
              borderRadius: 12,
              height: 44,
              borderWidth: 1,
              borderColor: '#DADCDF',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                lineHeight: 24,
                color: '#07162D',
              }}
            >
              Claim 15 pts
            </Text>
          </Pressable>
        </Pressable>

        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              gap: 12,
            }}
          >
            <Image source={GymIcon} />
            <Text
              style={{
                fontSize: 16,
                color: '#07162D',
                fontWeight: '500',
                lineHeight: 24,
              }}
            >
              50 Push ups
            </Text>
            <Image
              source={CheckIcon}
              style={{ height: 24, width: 24, left: -6 }}
            />
          </View>
          <Pressable
            style={{
              borderRadius: 12,
              height: 44,
              borderWidth: 1,
              borderColor: '#DADCDF',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                lineHeight: 24,
                color: '#07162D',
              }}
            >
              Claim 15 pts
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({});
