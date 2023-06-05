import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Animated, StyleSheet, findNodeHandle, UIManager, StatusBar, Dimensions  } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import * as Colors from '../styles/Colors';
import ScrollableList from './ScrollableList';

const {width, height} = Dimensions.get('screen')

const images = {
  All:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Tech:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Banking:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Retail:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Politics:
  'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  };

const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef()
}));

const Tab = React.forwardRef(({item}, ref) =>{
  return(
    <View ref={ref}>
      <Text 
        style={{
          color:'black', 
          fontSize: 84/data.length, 
          fontWeight: 'bold', 
          textTransform: 'uppercase'
        }}
      >
        {item.title}
      </Text>
    </View>
  )
});

const Indicator = ({measures, scrollX}) =>{
  const inputRange = data.map((_, i)=> i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure=>measure.width)
  })
  const translateX = scrollX.interpolate({
    inputRange, 
    outputRange: measures.map((measure)=>measure.x)
  });
  return( <Animated.View
  style={{
    position: 'absolute',
    height: 4,
    width: indicatorWidth,
    left:0,
    backgroundColor: Colors.basePrimaryColor, 
    bottom: -10,
    transform:[{
      translateX
    }]
  }}
  />
  );
}


const Tabs = ({data, scrollX}) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  
  useLayoutEffect(()=>{
    let m = [];
    data.forEach((item)=>{
      item.ref.current.measureLayout(
        containerRef.current, 
        (x, y, width, height) => {
          m.push({
            x, y, width, height
          });

          if(m.length==data.length)
          {
            setMeasures(m);
          }
        }
      );
    });
  },[containerRef.current]);

  return <View style={{position: 'absolute', top: 10, width}}>
    <View 
    ref = {containerRef}
    style={{
      justifyContent: 'space-evenly',
      flex:1, 
      flexDirection:'row',
    }}>
      {data.map(item=>{
        return <Tab key={item.key} item={item} ref={item.ref}/>
      })}
    </View>
    {measures.length>0 &&  <Indicator measures={measures} scrollX={scrollX}/>}
  </View>
}

const HorizontalMenu = (props) =>{

  const scrollX = React.useRef(new Animated.Value(0)).current

  return(
    <View style={styles.container}>
      <Tabs scrollX={scrollX} data={data}/>
      <Animated.FlatList
        data={data}
        keyExtractor={item=>item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        bounces={false}
        renderItem={({item}) =>{
          return (
          <ScrollableList containerStyle={styles.container}></ScrollableList>
          // <Text style={{color:'black'}}>THIS IS TEST TEXT</Text>
          );  
      }}
      />
      <Text style={{color: 'black'}}>TEMP TEXT</Text>
    </View>
  );
}

export default HorizontalMenu;

const styles = StyleSheet.create({
  container:{
    marginTop: verticalScale(50),
    width: '100%',
  }
  });