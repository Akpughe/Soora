import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';

const Input = ({interSemiBold}) => {
  return (
    <View style={styles.emailInputWrapper}>
      <TextInput style={styles.emailInput} />
      <Pressable style={styles.notifyButton}>
        <Text style={[styles.notifyText, interSemiBold]}>Notify Me</Text>
      </Pressable>
    </View>
  );
};

export default Input;
