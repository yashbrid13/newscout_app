import { ImageBackground, Text, View } from 'react-native';
import {StyleSheet} from 'react-native';
import * as Colors from '../styles/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const NewsCard = () =>{

    return(
        <View style={newsCardStyle.cardContainer}>
            <ImageBackground source={require("../assets/images/newscard.png")} style={[newsCardStyle.cardImage]}></ImageBackground>
            <Text style={newsCardStyle.cardTitle}>Hill Reeying for power in a possible</Text>
        </View>
    )
}

const newsCardStyle = StyleSheet.create({
    cardContainer: {
        top: verticalScale(20),
        width: "80%",
        height: verticalScale(100),
        alignSelf: 'center',
        backgroundColor: Colors.basePrimaryColor,
        borderColor: 'black',
        borderWidth: 10,
    },
    cardImage:{
        width: "100%",
        height: verticalScale(200),
    },
    cardTitle:{
        fontFamily: "Poppins-Bold"
    }
})


export default NewsCard;