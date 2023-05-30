import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import LinearGradient from 'react-native-linear-gradient';

const Row = (props) => <View style={props.rowStyle}>{props.children}</View>;

const ImageCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.card}>
        <ImageBackground source={require('../assets/images/hp_newscard.png')} style={styles.cardImage}>
          <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
            >
              <View style={styles.textOverlay}>
                  <Row rowStyle={styles.authorContainer}>
                    <Text style={styles.authorText}>{props.authorText==null?"by Ryan Browe":props.authorText}</Text>
                  </Row>
                  <Row rowStyle={styles.titleContainer}>
                    <Text style={styles.titleText}>{props.titleText==null?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.ype and": props.titleText}</Text>
                  </Row>
                  {/* <Row rowStyle={styles.blurbContainer}>
                    <Text style={styles.blurbText}>“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”</Text>
                  </Row> */}
              </View>
            </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(255),
    width: horizontalScale(340),
    marginVertical: verticalScale(5)
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  cardImage: {
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  textOverlay:{
    flex:1,
    flexDirection: 'column',
    width: '100%',
    justifyContent:'flex-end',
    paddingBottom: verticalScale(15)
  },
  authorContainer:{
    borderColor: 'green',
    height: '40%',
    justifyContent: 'flex-end',
    paddingLeft: horizontalScale(15)  
  },
  authorText:{
    color:'white', 
    fontFamily:'Poppins-Bold',
    fontSize: moderateScale(12)
  },
  titleContainer:{
    borderColor:'red',
    paddingLeft: horizontalScale(15),
    paddingRight: horizontalScale(13)
  },
  titleText:{
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(16)
  },
  blurbContainer:{
    borderColor: 'white',
    paddingRight: horizontalScale(10)

  },
  blurbText:{
    color:'white',
    fontFamily: 'Poppins-Regular',
    paddingLeft: horizontalScale(15),
    fontSize: moderateScale(12)
  }
});

export default ImageCard;
