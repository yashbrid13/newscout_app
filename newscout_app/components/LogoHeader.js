import { StyleSheet, Text, View, Image, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric'

const LogoHeader = () => {

  const logo = props.logoImage!=null ? props.logoImage: require("../assets/images/newscout_logo_light.png");
  const [colorScheme, setColorScheme] = useState('light');

  // if (Appearance.getColorScheme() === 'dark') {
  //   setColorScheme('dark')
  //   const logo = require("../assets/images/newscout_logo_dark.png")
  // }

  // useEffect({

  // },[colorScheme])

  return (
    <View style={styles.card}>
      <Image style={styles.icon} source={logo}></Image>
      {props.children}
    </View>
  )
}

export default LogoHeader

const styles = StyleSheet.create({
    card:{
        paddingLeft: moderateScale(20),
        marginVertical: verticalScale(10),
    },
    icon:{
        height: verticalScale(40),
        width: horizontalScale(60)
    }
})