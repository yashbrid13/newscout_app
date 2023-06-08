import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const data = [];
const {width, height} = Dimensions.get('screen')

// DUMMY LIST FOR DISPLAY IDEALLY SHOULD BE PASSED DOWN FROM THE PROPS
for (let i = 1; i <= 50; i++) {
  data.push({
    id: String(i),
    title: `Banking`,
    subtitle: `This is world of fashion`,
    date: '22 Jan 2023',
    image: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  });
}

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </View>
);

const ScrollableList = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    height: verticalScale(100),
    width: horizontalScale(300),
    width: width,
  },
  imageContainer: {
    padding: moderateScale(10)
  },
  image: {
    width: horizontalScale(70),
    height: verticalScale(70)
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ScrollableList;
