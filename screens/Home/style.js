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
    lineHeight:44,
    paddingBottom:10
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
  download:{
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
    paddingTop:100,
    paddingBottom:10,
  },
  emailInputWrapper:{
    borderRadius:100,
    border: '0.803982px solid #0B0B0B',
    width:350,
    height:50,
    paddingLeft: 10,
    // paddingRight: 20,
    backgroundColor:'white',
    position:'relative',
    display:'flex',
    justifyContent:'center'
  },
  emailInput:{
    height:45,
    width:'80%',
    // paddingLeft: 20,
    // paddingRight: 20,
    position:'absolute',
    borderRadius:100,
    outline: 'none'

  },
  notifyButton:{
    width:100,
    height:36,
    position:'absolute',
    right:0,
    backgroundColor:'#0B0B0B',
    color:'white',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    marginRight:4
  },
  notifyText:{
    color:'white',
    fontWeight:600,
    fontSize:12,
  },
  socials:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:90,
    paddingBottom:20,
    width:'100%'
  },
  socialBorder:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    marginLeft:10,
    borderColor:'#000000',
    borderWidth:1
  },
  footer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
    width:'100%',
    borderTopColor:'#000000',
    borderTopWidth:1
  }
});

export default styles;
