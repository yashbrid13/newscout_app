import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric'

const MoreOptionIcon = (props) => {

    return (
        <View  style={styles.container}>
        <Image
          source={require('../assets/icons/moreoption_icon_red.png')}
          style={styles.image}
        />
      </View>
  )
}

export default MoreOptionIcon

const styles = StyleSheet.create({
    container: {
        width: horizontalScale(25),
        height: verticalScale(25),
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
})