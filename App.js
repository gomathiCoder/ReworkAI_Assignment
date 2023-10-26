import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles, colors } from './styles';
import { useFonts} from 'expo-font';
import { SimpleLineIcons, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import Logo from './Logo';

export default function App() {

  const [fontsLoaded] = useFonts({
    Coolvetica : require('./assets/fonts/Coolvetica.ttf'),
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf')
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.heroContainer}>
        <View style={styles.navBar}>
          <Logo />
          <View style={styles.menuIconContainer}>
            <SimpleLineIcons name='menu' size={24} color={colors.colorTextNormal}/>
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.titleBigHero}>Get Job-Ready with us.</Text>

          <Image 
          source={require('./assets/hero_img.png')}
          style={styles.imageHero}
          />

          <Text style={styles.txtParaNormal}>
            Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut lectus purus enim et a.
          </Text>

          <TouchableOpacity style={styles.btnPrimaryContainer}>
            <Text style={styles.btnPrimaryTxt}>Book Now</Text>
          </TouchableOpacity>

          <View style={styles.listContainer}>
            <View style={styles.listItm}>
              <Feather name='check-circle' size={16} color={colors.colorTextNormal} />
              <Text style={styles.txtSmall}>7-day free trial</Text>
            </View>

            <View style={styles.listItm}>
              <Feather name='check-circle' size={16} color={colors.colorTextNormal} />
              <Text style={styles.txtSmall}>No credit card required</Text>
            </View>
          </View>

          <Text style={styles.txtMedium}>Get placed at</Text>

          <View style={styles.iconContainer}>
            <Image
            source={require('./assets/tata.png')}
            style={styles.iconTata}
            />
            <Image
            source={require('./assets/sony.png')}
            style={styles.iconSony}
            />
            <Image
            source={require('./assets/uber.png')}
            style={styles.iconUber}
            />
            <Image
            source={require('./assets/airtel.png')}
            style={styles.iconAirtel}
            />
          </View>

        </View>
      </View>

      <View style={styles.whyUsContainer}>
        <Text style={styles.txtHeading}>Why Us?</Text>  

        <Text style={styles.txtTitle}>We'll guide you to your perfect placement.</Text>

        <View style={styles.whyUsContent}>
          <View style={styles.cardContainer}>
            <Image
            source={require('./assets/whyUs_img1.png')}
            style={styles.cardImagePrimary}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>Expert Mentor</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image
            source={require('./assets/whyUs_img2.png')}
            style={styles.cardImagePrimary}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>1 to 1 Mentorship</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image
            source={require('./assets/whyUs_img3.png')}
            style={styles.cardImagePrimary}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>Stand Out</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>

        </View>
      </View>
      <View style={styles.hiwContainer}>
        <Text style={styles.txtHeading}>How it works</Text>

        <Text style={styles.txtTitle}>
          3-step process to {'\n'}
          <Text style={{color: colors.colorTextHeading}}> get you placed</Text>
        </Text>

        <View>
          <View style={styles.tabLine}></View>
          <View style={styles.tabContainer}>
            <View style={styles.tabNameContainer}>
              <Text style={styles.tabNameActive}>1</Text>
            </View>
            <View style={styles.tabNameContainer}>
              <Text style={styles.tabNameInactive}>2</Text>
            </View>
            <View style={styles.tabNameContainer}>
              <Text style={styles.tabNameInactive}>3</Text>
            </View>
          </View>
        </View>

        <View style={styles.hiwContent}>
          <Text style={styles.txtTitleMedium}>Step 1 Name</Text>
          <Text style={styles.txtParaDark}>
          Lorem ipsum dolor sit amet consectetur. Turpis dictum tincidunt pharetra ut enim sagittis aliquam. Turpis venenatis eu feugiat arcu vestibulum blandit eu ac leo. Egestas commodo malesuada risus viverra semper ornare scelerisque tristique venenatis. Elementum liber. tristique venenatis. Elementum liber.
          </Text>
          <Image 
          source={require('./assets/howItWorks_img.png')}
          style={styles.imageMedium}
          />
        </View>

        <TouchableOpacity style={styles.btnPrimaryWiderContainer}>
          <Text style={styles.btnPrimaryTxt}>Book Free Trial</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.benefitsContainer}>
        <Text style={styles.txtHeading}>Benefits</Text>
        
        <Text style={styles.txtTitle}>What will i get?</Text>

        <View style={styles.benefitsContent}>
          <View style={styles.cardContainerBenefits}>
            <Image
            source={require('./assets/benefits_img1.png')}
            style={styles.cardImage}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>Guidance</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>

          <View style={styles.cardContainerBenefits}>
            <Image
            source={require('./assets/benefits_img2.png')}
            style={styles.cardImage}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>Better Matches</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>

          <View style={styles.cardContainerBenefits}>
            <Image
            source={require('./assets/benefits_img3.png')}
            style={styles.cardImage}
            />

            <View style={styles.cardTxtContainer}>
              <Text style={styles.cardTitle}>Success</Text>

              <Text style={styles.cardPara}>
                Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btnPrimaryWiderContainer}>
          <Text style={styles.btnPrimaryTxt}>Book Free Trial</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.txtHeading}>Reviews</Text>
        
        <Text style={styles.txtTitle}>What our Clients say</Text>

        <View style={styles.imageReviewbg}></View>

        <Image
        source={require('./assets/review_img.png')}
        style={styles.imageReview}
        />

        <View style={styles.reviewsContent}>
          <Text style={styles.txtMedium}>Nandini Rawat,</Text>

          <Text style={styles.txtLight}>Software Engineer</Text>

          <Image 
          source={require('./assets/microsoft.png')}
          style={styles.iconMicrosoft}
          />

          <View style={styles.ratingMeter}>
            <FontAwesome name='star' size={19} color={colors.colorRatingStar} />
            <FontAwesome name='star' size={19} color={colors.colorRatingStar} />
            <FontAwesome name='star' size={19} color={colors.colorRatingStar} />
            <FontAwesome name='star' size={19} color={colors.colorRatingStar} />
            <FontAwesome name='star' size={19} color={colors.colorRatingStar} />
          </View>

          <Text style={styles.txtTitleSmallLight}>Unlocking Opportunities!!</Text>

          <Text style={styles.txtRegularAlignLeft}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          <View style={styles.tabBarReview}>
            <View style={styles.tabLineReviewActive}></View>
            <View style={styles.tabLineReviewInactive}></View>
            <View style={styles.tabLineReviewInactive}></View>
            <View style={styles.tabLineReviewInactive}></View>
          </View>
        </View>

        <TouchableOpacity style={[styles.btnPrimaryContainer, {top:-200}]}>
          <Text style={styles.btnPrimaryTxt}>Apply Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.regNowContainer}>
        <Text style={styles.txtTitle}>Register Now!</Text>

        <Text style={styles.txtParaMedium}>
        Begin your journey today or preview a sample profile. Your next career move awaits!
        </Text>

        <TouchableOpacity style={styles.btnPrimaryContainer}>
          <Text style={styles.btnPrimaryTxt}>Apply Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondaryWiderContainer}>
          <Text style={styles.btnSecondaryTxt}>View Sample Profile</Text>
        </TouchableOpacity>

        <Image 
        source={require('./assets/design_curve.png')}
        />
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerLogoPadding}>
          <Logo />
        </View>

        <View style={styles.footerLineBr}></View>

        <View style={styles.linksContainer}>
          <View style={[styles.linksListContainer,{flex:1}]}>
            <Text style={styles.txtMedium}>Quick Links</Text>

            <View style={styles.linksList}>
              <Text style={styles.link}>Mentorship & Placement</Text>
              <Text style={styles.link}>Placement</Text>
              <Text style={styles.link}>Hire</Text>
            </View>

          </View>

          <View style={[styles.linksListContainer,{flex:2}]}>
              <Text style={styles.txtMedium}>More By Rework</Text>

              <View style={styles.linksList}>
                <Text style={styles.link}>Job Insurance</Text>   
                <Text style={styles.link}>AI Recruitment Platform</Text>         
              </View>
            </View>
        </View>
          
        <Text style={styles.txtMedium}>Join our mailing list</Text>

        <View style={styles.subContainer}>
          <TextInput 
          style={styles.subInput}
          placeholder='Enter Email'
          />

          <TouchableOpacity style={styles.subBtnContainer}>
            <Image 
            source={require('./assets/send-email.png')}
            style={styles.iconSendEmail}
            />
            <Text style={styles.subBtnTxt}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termsNCond}>
            <View style={styles.checkBox}></View>
            
            <Text style={styles.termsNCondTxt}>
              I agree to receive emails  from TalentFinder as per their Data & Privacy Policy.
            </Text>
          </View>

          <View style={styles.footerLineBrLight}></View>

          <View style={styles.footerIconsContainer}>
            <Image source={require('./assets/fb.png')} style={styles.footerIcon} />
            <Image source={require('./assets/X.png')} style={styles.footerIcon} />
            <Image source={require('./assets/insta.png')} style={styles.footerIcon} />
            <Image source={require('./assets/linkedin.png')} style={styles.footerIcon} />
          </View>

          <View style={styles.footerLineBrLight}></View>

          <View style={styles.footerCopyright}>
            <View style={styles.copyrightIcon}>
             <AntDesign name='copyright' size={12} color={colors.colorTextNormal} />
            </View>
            <Text style={styles.copyrightTxt}>2023 TalentFinder</Text>
          </View>
      </View>
    </ScrollView>
  );
}