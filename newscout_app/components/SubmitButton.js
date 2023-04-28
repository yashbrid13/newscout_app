import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const SubmitButton = (props) =>{

    return(
        <TouchableOpacity onPress={props.onClick} style={[submitButtonStyle.button,props.bgStyle]}>
            <View>
                    <Text style={[submitButtonStyle.buttonText,props.textStyle]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const submitButtonStyle = StyleSheet.create({
    button:{
        backgroundColor: Colors.basePrimaryColor,
        height: verticalScale(45),
        top: verticalScale(15),
        margin: moderateScale(12),
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