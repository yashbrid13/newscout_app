import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = (props) => <View style={props.rowStyle}>{props.children}</View>;

const SearchResultCard = (props) => {

  const cardImage = require("../assets/images/search_result_card.png")

  return (
    <View style={styles.card}>
        <Col numRows={1}>
          <Row rowStyle={styles.cardImage}>
              <Image style={[styles.image,props.ImageStyle]} source={cardImage}></Image>
          </Row>
        </Col>
        <Col numRows={2}>
          <Row rowStyle={styles.title}>
              <Text style={styles.titleText}>{props.titleText==null?"Demo Title":props.titleText}</Text>
          </Row>
          <Row rowStyle={styles.timeElapsed}>
              <Text style={styles}>42 mins ago</Text>
          </Row>
          <Row rowStyle={styles.boomark}>
              <Text style={{color:'black'}}>This is r32</Text>
          </Row>
        </Col>
    </View>
  );
};

export default SearchResultCard

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    borderWidth: moderateScale(5),
    borderColor: 'red',
    height: verticalScale(150),
    overflow: 'hidden'
  },
  cardImage:{
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(140),
    padding: moderateScale(10)
  },
  image:{
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(10)
  },
  titleText:{
    color:'#072D4B',
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(15),
    padding: moderateScale(5),
    textDecorationLine: 'underline',
  },
  timeElapsed:{
    flex: 1,
    backgroundColor: 'red'
  },
  boomark:{
    flex:1,
    backgroundColor:'blue'
  },
  '1col': {
    flex: 1.5
  },
  '2col': {
    flex: 2.5
  }
});