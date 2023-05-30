import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const SubmitButton = (props) =>{

    return(
        <TouchableOpacity onPress={props.onClick} style={[props.bgStyle,styles.button]}>
            <View>
                <Text style={[props.textStyle,styles.buttonText]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.basePrimaryColor,
        height: verticalScale(45),
        top: verticalScale(15),
        borderRadius: moderateScale(6),
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        fontSize: moderateScale(16),
        color: 'white',
        fontFamily: 'Poppins-Medium'
      },
  });

export default SubmitButton;