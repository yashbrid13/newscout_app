import { useState } from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { verticalScale, horizontalScale, moderateScale } from '../styles/Metric';


const Checkbox = (props) => {

    const [isChecked,setCheck] = useState(false);

    const checkClicked = (fn_props) =>{
        console.log("Checked status",isChecked);
        props.onClicked();
        setCheck(!isChecked);
    }

    return(
        <TouchableOpacity onPress={checkClicked}>
                <ImageBackground source={isChecked?require("../assets/images/checked.png"):require("../assets/images/unchecked.png")} style={[checkBoxStyle.box,props.checkboxStyle]}/>  
        </TouchableOpacity>
    );
}

const checkBoxStyle = StyleSheet.create({
    box:{
      backgroundColor: Colors.basePrimaryColor,
      marginHorizontal: horizontalScale(12),
      marginTop: verticalScale(1),
      height: verticalScale(21),
      width: horizontalScale(19),
      borderRadius: moderateScale(10) 
    }
  });

export default Checkbox;