import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const Bookmark = (props) => {
  const [isBookmarked, setBookmarked] = useState(false);

  const handlePress = () => {
    if(props.bookmarkValue!=null)
    {
      props.getBookmarkValue(!isBookmarked);
    }
    setBookmarked(!isBookmarked);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container,props.containerStyle]}>
      {isBookmarked ? (
        <Image
          source={require('../assets/icons/bookmarked_icon_red.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={require('../assets/icons/bookmark_icon_red.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(40),
    padding: moderateScale(5),
  },
  icon: {
    width: horizontalScale(30),
    height: verticalScale(30)
  },
});

export default Bookmark;
