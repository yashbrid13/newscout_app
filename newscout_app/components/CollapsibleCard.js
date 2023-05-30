import React, { useState, useEffect, useRef, version } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated, TouchableOpacityComponent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';
import * as Colors from '../styles/Colors';

const CollapsibleCard = (props) => {
  const icons = {
    up: require('../assets/icons/up_arrow_secondary1.png'),
    down: require('../assets/icons/down_arrow_black1.png')
  };

  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [minHeight, setMinHeight] = useState(verticalScale(15));
  const [maxHeight, setMaxHeight] = useState(verticalScale(10));
  const [maxValueSet, setMaxValueSet] = useState(false);
  const [minValueSet, setMinValueSet] = useState(false);
  const [cardHeight, setCardHeight] = useState('auto');

  const toggle = () => {
    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    setExpanded(!expanded);

    Animated.spring(animation, {
      toValue: finalValue,
      useNativeDriver: false
    }).start();
  };

  const setMaxHeightHandler = event => {
    if (!maxValueSet) {
      setMaxHeight(event.nativeEvent.layout.height);
      setMaxValueSet(true);
    }
  };

  const setMinHeightHandler = event => {
    if (!minValueSet) {
      animation.setValue(event.nativeEvent.layout.height);
      setMinHeight(event.nativeEvent.layout.height);
      setMinValueSet(true);
    }
  };

  const animationIdRef = useRef(null);

  useEffect(() => {
    animationIdRef.current = animation.addListener(({ value }) => {
      setCardHeight(value);
    });

    return () => {
      animation.removeListener(animationIdRef.current);
    };
  }, [animation]);

  const icon = expanded ? icons['up'] : icons['down'];

  return (
    <TouchableHighlight underlayColor='none' onPress={toggle} activeOpacity={1}>
        <Animated.View style={[styles.container, { height: cardHeight, borderColor: expanded? Colors.baseSecondaryColor:'gray' }]}>
        <View style={styles.titleContainer} onLayout={setMinHeightHandler}>
            <Text style={styles.title}>{props.data.title}</Text>
            <Image style={styles.buttonImage} source={icon} />
        </View>

        <View style={styles.body} onLayout={setMaxHeightHandler}>
            <Text style={styles.bodyText} numberOfLines={5}>{props.data.topics}
        </Text>
        </View>
        </Animated.View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
    overflow: 'hidden',
    borderColor: 'gray',
    borderWidth: 1
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(14)
  },
  button: {},
  buttonImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(8)
  },
  body: {
    padding: moderateScale(10),
    paddingTop: verticalScale(0)
  },
  bodyText:{
    color: '#777F88',
    fontFamily: 'Poppins-Medium'
  }
});

export default CollapsibleCard;
