import { View, Text } from "react-native";
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { moderateScale, verticalScale } from '../styles/Metric';

const TextBox = (props) =>{
    return(
        <View style={[textBoxStyle.containerStyle,props.containerStyle]}>
            <Text style={[textBoxStyle.textStyle,props.textStyle]}>
                {props.text==null?"Dummy Text":props.text}
            </Text>
        </View>
    );
}

const textBoxStyle = StyleSheet.create({
    containerStyle: {
      height: verticalScale(60),
      alignSelf: 'center'
    },
    textStyle: {
        fontFamily: 'Poppins-Regular',
        color: Colors.extralight,
        fontSize: moderateScale(15),
    }
  });

export default TextBox;