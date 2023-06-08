import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ShareIcon = (props) => {

  const handlePress = async () => {
    try {
        const result = await Share.share({
          message: `Title: ${props.titleText} \nBlurb: ${props.content}`
          });  
        } 
        catch (error) {
        alert(error.message);
      }
  };

  return (
    <TouchableOpacity underlayColor='none' onPress={handlePress} style={[styles.container,props.containerStyle]}>
        <Image
          underlayColor='none' 
          source={require('../assets/icons/share_icon_red.png')}
          style={styles.icon}
          resizeMode="contain"
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(5),
  },
  icon: {
    width: horizontalScale(28),
    height: verticalScale(28)
  },
});

export default ShareIcon;


// import { Image, Share, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
// import {React, useState} from 'react'
// import { horizontalScale, verticalScale } from '../styles/Metric'

// const ShareIcon = (props) => {

//   const img = require('../assets/icons/share_icon_red.png')

//   const shareItems = async () =>{
//     console.log("SHARE PRESSEDs")
//     try {
//         const result = await Share.share({
//           message: `Title: ${props.titleText} \nBlurb: ${props.content}`
//           });  
//         } 
//         catch (error) {
//         alert(error.message);
//       }
//   }

//   return (
//     <TouchableHighlight style={[styles.container,props.containerStyle]} onPress={shareItems}>
//       <Image resizeMode="contain" style={[styles.icon,props.iconStyle]} source={img}></Image>
//     </TouchableHighlight>
//   )
// }

// export default ShareIcon

// const styles = StyleSheet.create({
//     container:{
//       // flex:1,
//       backgroundColor: 'blue',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     icon:{
//       height: verticalScale(30)
//     }
//   })