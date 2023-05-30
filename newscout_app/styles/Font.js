import { StyleSheet } from 'react-native'
import { moderateScale } from './Metric'


export const regular = StyleSheet.create({
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(12)
})