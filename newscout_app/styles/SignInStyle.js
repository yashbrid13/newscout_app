import {StyleSheet} from 'react-native';
import * as Colors from './Colors';
import { verticalScale, moderateScale, horizontalScale } from './Metric';

const SignInStyles = StyleSheet.create({
    container:{
      paddingTop: verticalScale(100),
      color: 'black'
    },
    inputContainer:{
      top: verticalScale(50),
      color: 'black'
    },
    forgotPassword:{
      margin: moderateScale(12),
      textDecorationLine: 'underline',
      fontFamily: 'Poppins-Medium',
      color: Colors.extraDark,
      textAlign: 'right',
      color: 'black'
    },
    signUpStyle:{
      flexDirection: 'row',
      alignSelf: 'center',
      top: moderateScale(100),
      color: 'black'
    },
    buttonBgStyle:{
      width: horizontalScale(350),
      height: verticalScale(60),
      color: 'black',
      alignSelf: 'center'
    }
  });

export default SignInStyles;