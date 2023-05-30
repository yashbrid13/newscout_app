import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  Popover
} from 'react-native-popup-menu';
import MoreOptionIcon from './MoreOptionIcon';
import { horizontalScale, moderateScale, verticalScale } from '../styles/Metric';

const PopupMenu = (props) => {
    return (
        <View style={styles.container}>
          <Menu>
            <MenuTrigger
             >
                <MoreOptionIcon></MoreOptionIcon>
                </MenuTrigger>
                  <MenuOptions optionsContainerStyle={[styles.menuContainer,props.menuContainerStyle]}>
                    {props.data!=null &&
                      props.data.map(content=>
                        <MenuOption key={content.id} style={[styles.menuOption, props.menuOptionStyle]} onSelect={content.func!=null?content.func:() => alert(` You clicked on a button`)}>
                            <Text style={[styles.menuOptionText, props.menuOptionTextStyle]}>{content.menuOptionText}</Text>
                        </MenuOption>
                    )}
                    {/* <MenuOption 
                      style={[styles.menuOption,props.menuOption]} 
                      onSelect={() => alert(` You clicked on Remove`)}
                    >
                      <Text style={{color:'black', fontFamily: 'Poppins-Regular'}}>Remove</Text>
                    </MenuOption>
                    <MenuOption 
                      onSelect={() => alert(`You Clicked on Delete`)} 
                      style={[styles.menuOption,props.menuOption]}
                    >
                      <Text style={{ color: 'black', fontFamily: 'Poppins-Regular' }}>Share</Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Not called`)}
                      style={[styles.menuOption,props.menuOption]}
                    >
                    <Text style={{ color: 'black', fontFamily: 'Poppins-Regular' }}>Report</Text>
                    </MenuOption> */}
                  </MenuOptions>
          </Menu>
        </View>
    );
}

export default PopupMenu;

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      width: horizontalScale(30),
      marginHorizontal: horizontalScale(5)
    },
    menuContainer: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: moderateScale(10),
      paddingVertical: verticalScale(5),
      paddingHorizontal: horizontalScale(8)
    },
    menuOptionText:{
      color:'black'
      ,height: verticalScale(30)
    }
    // },
    // button:{
    // backgroundColor: 'lightblue',
    // padding: 15,
    // borderRadius: 5,
    // textalign: 'center',
    // display: 'flex',
    // fontsize: 16,
    // margin: 4,
    // }
  });

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import {
//   Menu,
//   MenuProvider,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from "react-native-popup-menu";

// const SimpleMenu = () => {
//   return (
//     <MenuProvider style={styles.container}>
//       <Menu>
//         <MenuTrigger
//         text="Click for Option menu"
//           customStyles={{
//             triggerWrapper: {
//               top: -20,
//             },
//           }}
//         >
//         </MenuTrigger>
//         <MenuOptions>
//           <MenuOption onSelect={() => alert(`Save`)} text="Save" />
//           <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
//         </MenuOptions>
//       </Menu>
//     </MenuProvider>
//   );
// };

// export default SimpleMenu;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'blue',
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 30,
//     flexDirection: "column",
//   },
// });