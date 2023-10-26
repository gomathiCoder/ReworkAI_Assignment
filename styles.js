import { StyleSheet, Dimensions } from 'react-native';

export const windowHeight = Dimensions.get('window').height;

export const colors = {
  colorPrimary : '#6333E3',
  colorSecondary : '#beeb42',
  colorTextNormal: '#ffffff',
  colorTextDark: '#202020',
  colorTextHeading: '#6d38fb',
  colorTextMedium: '#4b4b4b',
  colorTextLight: "#bbbbbd",
  colorRatingStar: '#DFB300',
  colorTabInactive: '#D9D9D966',
  colorSubBtnTxt: '#1e1e1e',
  colorLineBrLight : 'rgba(255,255,255, 0.3)'
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.colorTextNormal
  },
  heroContainer:{
    width:'100%',
    height: windowHeight * 1.45,
    backgroundColor: colors.colorPrimary
  },
  navBar:{
    width:'100%',
    flexDirection:'row',
    top: '8%',
    justifyContent:'space-between',
    paddingVertical: 8,
    paddingHorizontal:24,
    backgroundColor: colors.colorPrimary
  },
  logoContainer:{
    width:95
  },
  logoTitle:{
    flexDirection:'row'
  },
  logoTxtNrml1:{
    fontFamily: 'Coolvetica',
    fontWeight: '400',
    fontSize: 16.98,
    lineHeight: 20.38,
    color: colors.colorSecondary
  },
  logoTxtNrml2:{
    fontFamily: 'Lato',
    fontWeight:'800',
    fontSize: 16.98,
    lineHeight: 20.38,
    color: colors.colorTextNormal
  },
  logoTxtSmall:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 10,
    color: colors.colorTextNormal,
    alignSelf:'flex-end'
  },
  menuIconContainer :{
    paddingHorizontal:5.04,
    paddingVertical:0
  },
  heroContent:{
    marginTop: '16%'
  },
  titleBigHero:{
    fontFamily: 'Coolvetica',
    fontWeight: '400',
    fontSize: 56,
    lineHeight: 56,
    textAlign: 'center',
    color: colors.colorTextNormal,
    marginHorizontal:'1%'
  },
  imageHero:{
    alignSelf:'center',
    justifyContent:'center',
    resizeMode:'cover',
    width:297,
    height:292,
    borderColor: colors.colorTextNormal,
    marginTop: '5%'
  },
  txtParaNormal:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    width:'90%',
    color: colors.colorTextNormal,
    marginVertical:'5%',
    marginHorizontal:'2%',
    alignSelf:'center',
    textAlignVertical:'center'
  },
  txtParaMedium:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    width:'90%',
    color: colors.colorTextMedium,
    margin:'5%'
  },
  txtParaDark:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    width:'90%',
    color: colors.colorTextDark,
    margin:'5%'
  },
  btnPrimaryContainer:{
    width:'50%',
    margin:'3%',
    alignSelf:'center'
  },
  btnPrimaryWiderContainer:{
    width:'60%',
    margin:'4%',
    alignSelf:'center'
  },
  btnPrimaryTxt:{
    paddingVertical:14,
    paddingHorizontal:32,
    borderRadius:40,
    backgroundColor: colors.colorSecondary,
    color: colors.colorTextDark,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    alignSelf:'center',
    textAlignVertical:'center'
  },
  btnSecondaryWiderContainer:{
    width:'80%',
    margin:'4%',
    alignSelf:'center'
  },
  btnSecondaryTxt:{
    paddingVertical:14,
    paddingHorizontal:32,
    borderRadius:40,
    backgroundColor: colors.colorTextNormal,
    color: colors.colorTextDark,
    borderColor: colors.colorSecondary,
    borderWidth:4,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    alignSelf:'center',
    textAlignVertical:'center'
  },
  listContainer:{
    margin:'2.5%',
    alignItems:'center',
    marginVertical:'5%'
  },
  listItm:{
    flexDirection:'row',
    marginVertical: '0.5%'
  },
  txtSmall:{
    fontFamily:'PoppinsRegular',
    fontWeight:'400',
    fontSize:16,
    lineHeight:19,
    color: colors.colorTextNormal,
    marginHorizontal:'1.5%'
  },
  txtMedium:{
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: colors.colorTextNormal
  },
  txtLight:{
    fontFamily: 'PoppinsLight',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: colors.colorTextNormal
  },
  txtRegularAlignLeft:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'left',
    color: colors.colorTextNormal,
    marginVertical:'2%'
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  iconTata:{
    width:50.72,
    height:42.88
  },
  iconSony:{
    width:86.71,
    height:15.24
  },
  iconUber:{
    width:65.03,
    height:22.58
  },
  iconAirtel:{
    width:86.71,
    height:48.77
  },
  whyUsContainer:{
    width:'100%',
    height: windowHeight * 1.35,
    backgroundColor: colors.colorTextNormal
  },
  txtHeading:{
  fontFamily: 'Coolvetica',
  fontWeight:'400',
  fontSize: 24,
  lineHeight: 24,
  textAlign: 'center',
  color: colors.colorTextHeading,
  marginTop: '9.9%'
  },
  txtTitle:{
    fontFamily: 'Coolvetica',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    marginTop:'4.5%',
    color: colors.colorTextDark
  },
  txtTitleSmallLight:{
    fontFamily: 'Coolvetica',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginTop:'4.5%',
    color: colors.colorTextNormal
  },
  txtTitleMedium:{
    fontFamily: 'Coolvetica',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 36,
    textAlign: 'center',
    marginTop:'4.5%',
    color: colors.colorTextDark
  },
  whyUsContent:{
    margin:'3%'
  },
  cardContainer:{
    marginBottom:'5%'
  },
  cardContainerBenefits:{
    marginBottom:'20%'
  }, 
  cardImage:{
    width: 72,
    height: 72,
    alignSelf:'center',
    borderRadius:15
  },
  cardImagePrimary:{
    width: 109,
    height: 94,
    alignSelf:'center',
    borderRadius:15,
    backgroundColor: colors.colorPrimary
  },
  cardTxtContainer:{
    marginTop: '7%'
  },
  cardTitle:{
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28.8,
    textAlign: 'center',
    color: colors.colorTextDark
  },
  cardPara:{
    marginTop: '2%',
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: colors.colorTextMedium
  },
  hiwContainer:{
    width:'100%',
    height: windowHeight *1.6,
    backgroundColor: colors.colorTextNormal
  },
  tabLine:{
    width:'62.5%',
    borderColor: colors.colorTextLight,
    borderTopWidth:4,
    alignSelf:'center',
    zIndex:1,
    top: 50
  },
  tabContainer:{
    zIndex:2,
    top:38,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'65%'
  },
  tabNameContainer:{
    top:-10
  },
  tabNameInactive:{
    width:45,
    height:45,
    backgroundColor: colors.colorTextNormal,
    borderRadius:45,
    borderWidth:2.5,
    borderColor: colors.colorTextLight,
    color: colors.colorTextLight,
    fontFamily:'Coolvetica',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 40,
    textAlign:'center',
    padding:5
  },
  tabNameActive:{
    width:45,
    height:45,
    backgroundColor: colors.colorPrimary,
    borderRadius:45,
    borderWidth:2.5,
    borderColor: colors.colorPrimary,
    color: colors.colorTextNormal,
    fontFamily:'Coolvetica',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 40,
    textAlign:'center',
    padding:5
  },
  hiwContent:{
    width:'90%',
    height: windowHeight * 0.95,
    borderColor: colors.colorTextLight,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal:'5%',
    marginTop:'20%',
    marginBottom:'7%'
  },
  imageMedium:{
    width:'79.25%',
    height: 178,
    alignSelf: 'center'
  },
  benefitsContainer:{
    width:'100%',
    height: windowHeight * 1.6 ,
    backgroundColor: colors.colorTextNormal
  },
  benefitsContent:{
    marginHorizontal:'5%',
    marginTop:'12%'
  },
  reviewsContainer:{
    width:'100%',
    height: windowHeight * 1.4,
    backgroundColor: colors.colorTextNormal
  },
  imageReviewbg:{
    backgroundColor: colors.colorSecondary,
    alignSelf:'flex-end',
    marginRight:'5%',
    width:153.73,
    height:146.77,
    top:35,
    zIndex:1,
    borderRadius:77
  },
  imageReview:{ 
    width:154,
    height:193,
    alignSelf:'flex-end',
    top:-154,
    zIndex:2,
    marginRight:'5%',
    borderRadius:154
  },
  reviewsContent:{
    width:'95.5%',
    height: windowHeight *0.75 ,
    backgroundColor: colors.colorPrimary,
    borderRadius:20,
    padding:22.5,
    top:-215,
    alignSelf:'center',
    alignItems:'flex-start'
  },
  iconMicrosoft:{
    width:98.24,
    height:17.56,
    marginVertical:'5%'
  },
  ratingMeter:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:124,
    height:20
  },
  tabBarReview:{
    flexDirection:'row',
    width:138,
    justifyContent:'space-between',
    marginVertical:'5%'
  },
  tabLineReviewActive:{
    width:56,
    borderColor: colors.colorTextNormal,
    borderTopWidth: 4,
    borderRadius:10
  },
  tabLineReviewInactive:{
    width:21,
    borderColor: colors.colorTabInactive,
    borderTopWidth: 4,
    borderRadius:10
  },
  regNowContainer:{
    width:'100%',
    height: windowHeight*0.75,
    backgroundColor: colors.colorTextNormal
  },
  footerContainer:{
    width:'100%',
    height: windowHeight * 0.78,
    backgroundColor: colors.colorPrimary
  },
  footerLogoPadding:{
    paddingTop: 38, 
    paddingLeft:26, 
    paddingBottom:10
  },
  footerLineBr:{
    width:'100%',
    borderColor: colors.colorTextNormal,
    borderTopWidth: 2
  },
  linksContainer:{
    flexDirection:'row',
     margin:'8%',
     width:'100%',
     justifyContent:'space-between'
  },
  linksListContainer:{
    alignItems:'flex-start',
    flex:1
  },
  linksList:{
    marginVertical:'2%'
  },
  link:{
    fontFamily:'PoppinsRegular',
    fontWeight:'400',
    fontSize:16,
    lineHeight:19.2,
    color: colors.colorTextNormal,
    marginVertical:'2%'
  },
  subContainer:{
    flexDirection:'row',
    margin:'5%'
  },
  subInput:{
    width:'50%',
    paddingHorizontal:25,
    paddingVertical:10,
    backgroundColor: colors.colorTextNormal,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontFamily: 'PoppinsRegular',
     fontWeight: '400',
     fontSize: 16,
     lineHeight: 19.2
  },
  subBtnContainer:{
    flexDirection:'row',
    width:'50%',
    backgroundColor: colors.colorSecondary,
    paddingVertical:10,
    paddingHorizontal: 26,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent:'center'
  },
  iconSendEmail:{
    width:26,
    height:20,
    marginHorizontal:'2%',
    alignSelf:'center'
  },
  subBtnTxt:{
    fontFamily:'PoppinsRegular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    color: colors.colorSubBtnTxt,
    alignSelf:'center'
  },
  termsNCond:{
    flexDirection:'row',
    marginHorizontal:'10%',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:'10%'
  },
  checkBox:{
    width:17.33,
    height:16,
    borderColor: colors.colorTextNormal,
    borderWidth:1.6,
    borderRadius: 4,
    marginHorizontal:'5%',
    alignSelf:'center'
  },
  termsNCondTxt:{
    fontFamily:'PoppinsRegular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.4,
    color: colors.colorTextNormal
  },
  footerLineBrLight:{
    width:'100%',
    borderColor: colors.colorLineBrLight,
    borderTopWidth: 1
  },
  footerIconsContainer:{
    flexDirection:'row',
    marginVertical:'2%',
    justifyContent:'center'
  },
  footerIcon:{
    width:15,
    height:15,
    marginHorizontal:'1.5%'
  },
  footerCopyright:{
    flexDirection:'row',
    marginHorizontal:'5%',
    position:'absolute',
    bottom:10,
    height:20
  },
  copyrightTxt:{
    fontFamily: 'PoppinsRegular',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    color: colors.colorTextNormal,
    marginHorizontal:'3%'
  },
  copyrightIcon:{
    justifyContent:'center'
   }
});