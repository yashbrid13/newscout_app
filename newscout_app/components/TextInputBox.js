import React from "react";
import { View, TextInput } from "react-native";
import { useState } from "react";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { verticalScale, horizontalScale, moderateScale } from '../styles/Metric';

const TextInputBox = (props) =>{

    const [inputText, setInputText] = useState('');

    const changeInputText = (text) =>{
        setInputText(text);
        props.onChange(text);
    }

    return(
        <View>
            <TextInput
            style={[textInputBoxStyle.inputBox, props.style]}
            onChangeText={changeInputText}
            placeholder={inputText==""?props.placeHolderText:inputText}
            value={inputText}
            secureTextEntry={props.hide==null?false:props.hide}
            />
        </View>
    );
}

const textInputBoxStyle = StyleSheet.create({
    inputBox: {
        height: verticalScale(50),
        top: verticalScale(5),
        margin: moderateScale(12),
        borderWidth: moderateScale(1),
        padding: moderateScale(15),
        borderColor: Colors.basePrimaryColor,
        borderRadius: moderateScale(6),
        paddingVertical: verticalScale(2)
      },
  });

export default TextInputBox;