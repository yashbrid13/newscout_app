import React from "react";
import { View, Text } from "react-native";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors'
import { verticalScale, horizontalScale, moderateScale } from '../styles/Metric';



const Headline = (props) =>{
    return(
        <View style={[headlineStyle.containerStyle,props.containerStyle]}>
            <Text style={[headlineStyle.textStyle,props.textStyle]}>
                {props.text==null?"Dummy Text":props.text}
            </Text>
        </View>
    );
}

const headlineStyle = StyleSheet.create({
    containerStyle: {
      height: verticalScale(45),
      alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'Poppins-Bold',
        color: Colors.extraDark,
        fontSize: moderateScale(30),
    }
  });

export default Headline;