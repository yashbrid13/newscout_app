import React from 'react';
import { StyleSheet, View, Text, Image, Share } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import * as Colors from "../styles/Colors";
import Bookmark from './Bookmark';
import PopupMenu from './PopupMenu';


const Col = ({ numRows, children }) => (
  <View style={[styles.col, styles[`${numRows}col`]]}>{children}</View>
);

const Row = ({ children }) => ( 
  <View style={styles.row}>{children}</View>
);

const BookmarkCard = (props) => {

    const cardImage = props.imageURL!=null?props.image:require('../assets/images/bookmark_card.png')

    //Content to be shared is decided in result
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: `Title: ${props.titleText} \nBlurb: ${props.content}`
          });  
        } 
      catch (error) {
        alert(error.message);
      }
    };
    
    const onRemove = async () =>{
      if(props.removeSheet!=null)
      {
        props.removeSheet(props.id)
      }
    }

    const tempData =[
      {
        "id": 1,
        "func": onRemove,
        "menuOptionText": `Remove`
      },
      {
        "id": 2,
        "func": onShare,
        "menuOptionText":`Share`, 
      },
    ]

    return(
  <View style={[styles.container,props.containerStyle]}>
    <View style={[styles.card,props.cardStyle]}>
        <Row>
        <Col numRows={11}>
            <Text numberOfLines={3} style={[styles.cardTitle,props.cardTitleStyle]}>{props.titleText==null?"Card Title":props.titleText}</Text>
        </Col>
        <Col numRows={12}>
            <Image style={[styles.image,props.imageStyle]} source={cardImage}></Image>
        </Col>
        </Row>
        <Row>
        <Col numRows={21}>
            <Text style={[styles.timeElapsed,props.timeElapsedStyle]}>{props.timeElapsed==null?"Time Elapsed":props.timeElapsedText}</Text>
        </Col>
        <Col numRows={22}>
          <Bookmark ></Bookmark>
          <PopupMenu data={tempData} menuContainerStyle={[styles.popupmenuContainer,props.popupmenuContainerStyle]}></PopupMenu>
        </Col>
        </Row>
        <Row>
        <Col numRows={31}>
            <Text numberOfLines={2} style={[styles.content,props.contentStyle]}>{props.content==null?"Card Content":props.content}</Text>
        </Col>
        </Row>
    </View>
  </View>)
};

export default BookmarkCard;

const styles = StyleSheet.create({
    container: {   
      padding: moderateScale(10),
    },
    card:{
        borderColor: Colors.extralight,
        borderWidth: moderateScale(1),
        maxHeight: verticalScale(300),
        overflow: 'hidden',
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(15),
        paddingLeft: horizontalScale(5)
    },
    row: {
      flexDirection: 'row'
    },
    cardTitle:{
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: moderateScale(18),
        margin: moderateScale(15)
    },
    timeElapsed:{
        fontFamily: 'Poppins-Regular',
        color: Colors.extralight
    },
    image:{
        height: verticalScale(100),
        width: horizontalScale(100),
        borderRadius: moderateScale(10),
        margin: moderateScale(5)
    },
    content:{
      color: Colors.extralight,
      fontFamily: 'Poppins-Medium',
      alignItems: 'center',
    },
    popupmenuContainer:{
      marginLeft: horizontalScale(40),
      marginTop: verticalScale(25),
      width: horizontalScale(100)
    },
    '11col': {
        flex: 2.5
      },
    '12col': {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1.5
    },
    '21col': {
      marginHorizontal: moderateScale(10),
      justifyContent: 'center',
      flex: 2.5,
    },
    
    '22col': {
      flex: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginLeft: horizontalScale(30)
    },
    '31col':{
      flex:1,
      alignItems: 'flex-start',
      marginHorizontal: horizontalScale(8),
      marginVertical: verticalScale(1)
    }
  })
  