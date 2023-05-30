// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'
// const SearchResultCard = (props) => {

//   const cardImage = require("../assets/images/search_result_card.png")

//   const Col = ({ numRows, children }) => (
//     <View style={[styles.col, styles[`${numRows}col`]]}>{children}</View>
//   );
  
//   const Row = ({ children }) => <View style={styles.row}>{children}</View>;

//   return (
//     <View style={styles.container}>
//         <View style={styles.card}>

//         </View>
//     </View>
//   );
// };

// export default SearchResultCard

// const styles = StyleSheet.create({
    
// });




import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import Bookmark from './Bookmark';
import ShareIcon from './ShareIcon';

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = (props) => {
    return <View style={props.rowStyle}>{props.children}</View>;
}

const SearchResultCard = (props) => {

  const cardImage = require("../assets/images/search_result_card.png")

  return (
    <View style={styles.container}>
        <View style={[styles.card,styles.elevation]}>
            <Row rowStyle={styles.row1}>
                <Col numRows={11}>
                    <Row rowStyle={styles.titleContainer}>
                    <Text numberOfLines={2} style={styles.titleText}>{props.titleText}</Text>
                    </Row>
                    <Row rowStyle={styles.blurbContainer}>
                    <Text numberOfLines={3} style={styles.blurbText}>{props.blurbText}</Text>
                    </Row>
                </Col>
                <Col numRows={12}>
                    <Image style={styles.image} source={props.image}></Image>
                </Col>
            </Row>
            <Row rowStyle={styles.row2}>
                <Col numRows={21}>
                <Text style={{color:'#2D2D2D'}}>{props.category}</Text>
                </Col>
                <Col numRows={22}>
                <Text style={{color:'#2D2D2D'}}>{props.timeElapsed}</Text>
                </Col>
                <Col numRows={23}>
                    <Bookmark></Bookmark>
                    <ShareIcon></ShareIcon>
                </Col>
            </Row>
        </View>
    </View>
  );
};

export default SearchResultCard

const styles = StyleSheet.create({
    container:{
        height: verticalScale(210),
        width: horizontalScale(320),
        justifyContent: 'center',
        margin: moderateScale(5)
    },
    card: {
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        paddingTop: verticalScale(10),
        borderRadius: moderateScale(10)
    },
    row1:{
        flexDirection: 'row',
        width: '100%',
        height: '80%'
    },
    row2:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        justifyContent: 'flex-end',
        paddingLeft: horizontalScale(5),
        flex: 0.7
    },
    titleText:{
      color:'black',
      fontFamily: 'Poppins-Medium',
      fontSize: moderateScale(14),
      padding: moderateScale(5),
      textDecorationLine: 'underline',
    },
    blurbContainer:{
        paddingLeft: horizontalScale(10)
    },
    blurbText:{
      color:  '#0A0101',
      fontSize: moderateScale(12),
      fontFamily: 'Poppins-Regular'
    },
    image:{
      height: horizontalScale(138),
      width: horizontalScale(122),
      padding: moderateScale(5),
      borderRadius: moderateScale(10)
    },
    elevation: {  
      shadowColor: '#000', 
      shadowOffset: { width: 40, height: 4 }, 
      shadowOpacity: 0.8, 
      shadowRadius: 4, 
      elevation: 4, 
      backgroundColor: '#fff',
    },  
    '11col': {
      flex: 2.5,
    },
    '12col':{
      flex:2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    '21col': {
      flex: 1,
      alignItems: 'center',
    },
    '22col':{
      flex: 1,
      alignItems: 'center',
    },
    '23col':{
      flex:2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: horizontalScale(15)
    },
    '24col':{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'pink',
      borderWidth: moderateScale(5)
    }
});