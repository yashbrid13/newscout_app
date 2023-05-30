import { StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric'
import Checkbox from './Checkbox'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CheckboxCard = () => {

    const [isSelected, setSelected] = useState(false);

    const pressHandler = () =>{
        setSelected(!isSelected)
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={[styles.card,isSelected?styles.selected:null]}>
        <Text style={styles.title}>
            Sector Update
        </Text>
        <Checkbox isClicked={isSelected} containerStyle={styles.checkbox}>

        </Checkbox>
      </TouchableOpacity>
    </View>
  )
}

export default CheckboxCard

const styles = StyleSheet.create({
    container:{
        width: '80%',
        alignItems: 'center',
        margin: moderateScale(5)
    },
    card:{
        width: '100%',
        borderRadius: moderateScale(5),
        height: verticalScale(50),
        borderWidth: moderateScale(1),
        borderColor: '#D2CFCF',
        alignItems:'center',
        paddingLeft: horizontalScale(20),
        flexDirection: 'row'
    },
    title:{
        flex:4,
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(14)
    },
    checkbox: {
        flex: 1
    },
    selected:{
        backgroundColor: '#E9E9E9'
    }
})