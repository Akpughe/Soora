import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  emailInputWrapper: {
    borderRadius: 100,
    border: '0.803982px solid #0B0B0B',
    width: 350,
    height: 50,
    paddingLeft: 10,
    // paddingRight: 20,
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  emailInput: {
    height: 45,
    width: '80%',
    // paddingLeft: 20,
    // paddingRight: 20,
    position: 'absolute',
    borderRadius: 100,
  },
  notifyButton: {
    width: 100,
    height: 36,
    position: 'absolute',
    right: 0,
    backgroundColor: '#0B0B0B',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 4,
  },
  notifyText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 12,
  },
});

export default styles;
