import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import styles from './style';
import Header from '../../components/Header';
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
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const phoneLeft = require('../../assets/home/images/landing-image-1.png');
const phoneRight = require('../../assets/home/images/landing-image-2.png');
const appStore = require('../../assets/home/images/apple-store.png');
const playStore = require('../../assets/home/images/google-play.png');

const facebook = require('../../assets/home/images/facebook.png');
const twitter = require('../../assets/home/images/twitter.png');
const instagram = require('../../assets/home/images/instagram.png');
const tiktok = require('../../assets/home/images/tiktok.png');
const youtube = require('../../assets/home/images/youtube.png');

const Home = () => {
  let [fontsLoaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
      <Header interRegular={interRegular} />

      {/* Coming soon */}
      <View style={styles.comingSoon}>
        <Text style={[interNormal]}>Coming soon</Text>
        <View style={styles.together}>
          <Text style={[styles.togetherText1, interExtraBold]}>Bringing</Text>
          <Text style={[styles.togetherText2, interExtraBold]}>
            Muslims Together
          </Text>
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
          <Text style={[styles.togetherText1, interExtraBold]}>
            Get Notified
          </Text>
          <Text style={[styles.togetherText2, interExtraBold]}>
            When we Launch
          </Text>
        </View>
        {/* Input */}
        <Input interSemiBold={interSemiBold} />
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
     <Footer interRegular={interRegular}/>
    </SafeAreaView>
  );
};

export default Home;
