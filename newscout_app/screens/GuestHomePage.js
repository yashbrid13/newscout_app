import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogoHeader from '../components/LogoHeader'
import * as Font from '../styles/Font'
import { horizontalScale, verticalScale } from '../styles/Metric'
import SubmitButton from '../components/SubmitButton'
import HorizontalMenu from '../components/HorizontalMenu'

const horizontalMenuItems = ['All','Tech','Banking','Retail','Politics','Entertainment']

const GuestHomePage = () => {
  return (
    <View style={styles.container}>
      <LogoHeader></LogoHeader>
      <View style={styles.headingContainer}>
        <Text style={Font.regular}>You are not logged in. Sookmark news leave comment and a lot more!</Text>
      </View>
      <SubmitButton bgStyle={styles.button} text="Sign in"></SubmitButton>
      <HorizontalMenu></HorizontalMenu>
    </View>
  )
}

export default GuestHomePage

const styles = StyleSheet.create({
    headingContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        paddingHorizontal: horizontalScale(10)
    },
    button:{
        width: horizontalScale(340),
        alignSelf: 'center',
        marginBottom: verticalScale(-20)
    }
})