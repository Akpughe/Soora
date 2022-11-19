import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  comingSoon: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:30,
    // paddingBottom:150,
  },
  together: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 44,
    paddingBottom: 10,
  },
  togetherText1: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    // fontFamily:'Inter-Bold',
  },
  togetherText2: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  download: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  getNotified: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 10,
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 20,
    width: '100%',
  },
  socialBorder: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
});

export default styles;
