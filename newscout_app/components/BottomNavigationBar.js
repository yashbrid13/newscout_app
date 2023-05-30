import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { verticalScale, horizontalScale, moderateScale } from '../styles/Metric';

const BottomNavigationBar = ({ navigationItems, activeItem, onItemPress }) => {

  return (
    <View style={styles.container}>
      {navigationItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item, index === activeItem && styles.activeItem]}
          onPress={() => onItemPress(index)}
        >
          <Text style={styles.itemText}>{item.label}</Text>
          {/* {item.icon && <item.icon size={moderateScale(24)} />} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: verticalScale(1),
    borderTopColor: '#ccc',
  },
  item: {
    flex: 1,
    paddingVertical: verticalScale(8),
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: 'green',
  },
  itemText: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
    color: 'black'
  },
});

export default BottomNavigationBar;
