import { ImageBackground, Image, Text, View, Modal } from 'react-native';
import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import * as Colors from '../styles/Colors';
import SubmitButton from './SubmitButton';

const ModalCard = (props) =>{

    const image = require("../assets/images/success_modal.png")

    return(
        <Modal visible={true} transparent={true}>
                <View style={[props.modalContainerStyle, styles.modalContainer]}>
                    <View style={[props.cardStyle,styles.card]}>
                        {props.imageVisible && <Image source={image} style={[props.imageStyle,styles.imageStyle]}></Image>}
                        <Text style={[props.cardTitleStyle, styles.cardTitle]}> {props.titleText} </Text>
                        <Text style={[props.cardTextStyle, styles.cardText]}> {props.content} </Text>
                        <SubmitButton text={props.buttonText} bgStyle={{width: horizontalScale(200), marginBottom: verticalScale(20)}}></SubmitButton>
                    </View>
                </View>
        </Modal>
    )
} 

const styles = StyleSheet.create({
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
   },
   card:{
    height:'auto',
    width: horizontalScale(250),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: moderateScale(20)
   },
   cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: "Poppins-SemiBold", 
    color: Colors.baseSecondaryColor,
   },
   cardText:{
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center'
   }
   ,
   imageStyle:{
    alignSelf: 'center'
   }
})

export default ModalCard;