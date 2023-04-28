import {StyleSheet} from 'react-native';
import * as Colors from './Colors';
import { verticalScale, moderateScale } from './Metric';

const SignInStyles = StyleSheet.create({
    container:{
      paddingTop: verticalScale(100)
    },
    inputContainer:{
      top: verticalScale(50)
    },
    forgotPassword:{
      margin: moderateScale(12),
      textDecorationLine: 'underline',
      fontFamily: 'Poppins-Medium',
      color: Colors.extraDark,
      textAlign: 'right'
    },
    signUpStyle:{
      flexDirection: 'row',
      alignSelf: 'center',
      top: moderateScale(100)
    },
    buttonBgStyle:{
      height: verticalScale(60)
    }
  });

export default SignInStyles;