import { ImageBackground, Image, Text, View, Linking } from 'react-native';
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { Avatar, Button, Card } from 'react-native-paper';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const NewsCard = (props) =>{

    const coverImage = require("../assets/images/newscard.png");
    const elapsedLogo = require("../assets/images/elapsed.png");

    return(
        <View  style={[props.cardContainerStyle,styles.cardContainer]}>
            <Card style={[props.cardStyle,styles.card]} onPress={() => {props.redirectURL}}>
                <Card.Cover style={[props.cardImageStyle,styles.cardImage]} source={props.coverImage!=null?props.coverImage:coverImage} />
                    <Card.Content>
                        
                        <Text numberOfLines={1} style={[props.cardTitleStyle,styles.cardTitle]}>{props.titleText}</Text>
                        <Text numberOfLines={2} style={[props.cardTextStyle,styles.cardText]}>{props.textBlurb}</Text>
                    </Card.Content>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.elapsedLogo} alt='Elapsed Time' source={elapsedLogo}></Image>
                    <Text style={[props.timeElapsedStyle, styles.timeElapsed]}> 2 hours ago</Text>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: horizontalScale(300),
        height: verticalScale(300),
        margin: moderateScale(10),
        paddingLeft: horizontalScale(10),
        paddingRight: horizontalScale(310),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(310),
        alignSelf: 'center',
    },
    card:{
        height: verticalScale(300),
        width: horizontalScale(300),
    },
    cardImage:{
        height: verticalScale(160),
        resizeMode: 'cover',
    },
    cardTitle:{
        color: Colors.medium,
        fontFamily: "Poppins-SemiBold",
        marginTop: verticalScale(15)
    },
    cardText: {
        color: Colors.light,
        fontFamily: "Poppins-Regular", 
        overflow: "hidden",
    },
    timeElapsed:{
        marginTop: verticalScale(10),
        color: Colors.light,
        fontFamily: "Poppins-Regular", 
    },
    elapsedLogo:{
        height: verticalScale(20),
        width: horizontalScale(20),
        alignSelf: 'center',
        marginLeft: horizontalScale(10)
    }
})


export default NewsCard;