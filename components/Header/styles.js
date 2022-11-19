import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 150,
    paddingLeft: 25,
    paddingRight: 25,
  },
  contactBtn: {
    backgroundColor: '#0B0B0B',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:14,
    paddingRight:14,
    borderRadius:4
  },
  contactBtnText:{
    color:'white',
    fontWeight:700,
    fontSize:10,
  },
});

export default styles;
