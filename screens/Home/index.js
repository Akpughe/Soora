import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import styles from './style';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const phoneLeft = require('../../assets/home/images/landing-image-1.png');
const phoneRight = require('../../assets/home/images/landing-image-2.png');
const logo = require('../../assets/home/images/logo1.png');
const appStore = require('../../assets/home/images/apple-store.png');
const playStore = require('../../assets/home/images/google-play.png');

const facebook = require('../../assets/home/images/facebook.png');
const twitter = require('../../assets/home/images/twitter.png');
const instagram = require('../../assets/home/images/instagram.png');
const tiktok = require('../../assets/home/images/tiktok.png');
const youtube = require('../../assets/home/images/youtube.png');

const Home = () => {
  let[fontsLoaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  let interExtraBold = {
    fontFamily: 'Inter_800ExtraBold',
  };
  let interSemiBold = {
    fontFamily: 'Inter_600SemiBold',
  };
  let interNormal = {
    fontFamily: 'Inter_500Medium',
  };
  let interRegular = {
    fontFamily: 'Inter_400Regular',
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      {/* Topbar */}
      <View style={styles.topbar}>
        <View>
          <Text>
            <Image source={logo} style={{ width: 74, height: 16 }} />
          </Text>
        </View>
        <View>
          <Pressable style={styles.contactBtn}>
            <Text style={[styles.contactBtnText, interRegular]}>
              Contact us{' '}
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: 5 }}
              >
                <path
                  d="M8.57107 1.46445C8.57107 1.18831 8.34721 0.964455 8.07107 0.964455L3.57107 0.964455C3.29493 0.964454 3.07107 1.18831 3.07107 1.46445C3.07107 1.7406 3.29493 1.96445 3.57107 1.96445L7.57107 1.96445L7.57107 5.96445C7.57107 6.2406 7.79493 6.46446 8.07107 6.46445C8.34721 6.46446 8.57107 6.2406 8.57107 5.96445L8.57107 1.46445ZM1.35355 8.88908L8.42462 1.81801L7.71751 1.1109L0.646447 8.18197L1.35355 8.88908Z"
                  fill="white"
                />
              </svg>
            </Text>
          </Pressable>
        </View>
      </View>
      {/* Coming soon */}
      <View style={styles.comingSoon}>
        <Text style={[interNormal]}>Coming soon</Text>
        <View style={styles.together}>
          <Text style={[styles.togetherText1, interExtraBold]}>Bringing</Text>
          <Text style={[styles.togetherText2, interExtraBold]}>Muslims Together</Text>
        </View>
        {/* download */}
        <View style={styles.download}>
          <View>
            {/* <Text>PlayStore</Text> */}
            <Image source={playStore} style={{ width: 135, height: 39 }} />
          </View>
          <View>
            {/* <Text>Android</Text> */}
            <Image source={appStore} style={{ width: 135, height: 39 }} />
          </View>
        </View>
      </View>
      {/* Images */}
      <View style={{ paddingTop: 60, margin: 'auto' }}>
        <Image source={phoneLeft} style={{ width: 350, height: 395 }} />
      </View>

      {/* Get notified */}
      <View style={styles.getNotified}>
        <Text style={[interNormal]}>Coming soon</Text>
        <View style={styles.together}>
          <Text style={[styles.togetherText1, interExtraBold]}>Get Notified</Text>
          <Text style={[styles.togetherText2, interExtraBold]}>When we Launch</Text>
        </View>
        <View style={styles.emailInputWrapper}>
          <TextInput style={styles.emailInput} />
          <Pressable style={styles.notifyButton}>
            <Text style={[styles.notifyText, interSemiBold]}>Notify Me</Text>
          </Pressable>
        </View>
      </View>
      <Text style={{ textAlign: 'center', fontFamily: 'Inter_400Regular' }}>
        Don&apos;t worry, we won&apos;t spam you {':)'}
      </Text>

      {/* Images 2 */}
      <View style={{ paddingTop: 60, margin: 'auto' }}>
        <Image source={phoneRight} style={{ width: 350, height: 395 }} />
      </View>

      {/* Socials */}
      <View style={styles.socials}>
        <Pressable style={styles.socialBorder}>
          <Image source={facebook} style={{ width: 24, height: 24 }} />
        </Pressable>
        <Pressable style={styles.socialBorder}>
          <Image source={twitter} style={{ width: 24, height: 24 }} />
        </Pressable>
        <Pressable style={styles.socialBorder}>
          <Image source={instagram} style={{ width: 24, height: 24 }} />
        </Pressable>
        <Pressable style={styles.socialBorder}>
          <Image source={tiktok} style={{ width: 24, height: 24 }} />
        </Pressable>
        <Pressable style={styles.socialBorder}>
          <Image source={youtube} style={{ width: 24, height: 24 }} />
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, interRegular]}>
          Copyright © 2022 Soora. All rights reserved{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
