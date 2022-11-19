import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = ({ interRegular }) => {
  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, interRegular]}>
        Copyright © 2022 Soora. All rights reserved{' '}
      </Text>
    </View>
  );
};

export default Footer;
