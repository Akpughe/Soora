import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';

const logo = require('../../assets/home/images/logo1.png');


const Header = ({interRegular}) => {
  return (
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
  );
};

export default Header;
