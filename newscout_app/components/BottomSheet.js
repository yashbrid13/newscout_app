import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, BackHandler, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { moderateScale, verticalScale, horizontalScale } from '../styles/Metric';
import BookmarkCard from './BookmarkCard';

const BottomSheet = (props) => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  const bottomSheetHeight = verticalScale(300);
  const sheetAnimation = new Animated.Value(bottomSheetHeight);

  const toggleSheet = () => {
    setSheetVisible(!sheetVisible);
  };

  const hideSheet = () => {
    setSheetVisible(false);
  };

  const toggleRemovePopup = (id) => {
    setRemoveId(id);
    setSheetVisible(!sheetVisible);
  };

  useEffect(() => {
    const backAction = () => {
      if (sheetVisible) {
        hideSheet();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, [sheetVisible]);

  useEffect(() => {
    Animated.timing(sheetAnimation, {
      toValue: sheetVisible ? 0 : bottomSheetHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [sheetVisible]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        {props.children && (
          Array.isArray(React.Children.toArray(props.children))
            ? React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { removeSheet: toggleRemovePopup });
              })
            : React.cloneElement(props.children, { removeSheet: toggleRemovePopup })
        )}
      </ScrollView>

      {sheetVisible && (
        <TouchableWithoutFeedback onPress={hideSheet} style={styles.backgroundOverlay}>
          <View style={styles.backgroundOverlay} />
        </TouchableWithoutFeedback>
      )}

      <Animated.View style={[styles.bottomSheetContainer, { transform: [{ translateY: sheetAnimation }] }]}>
        {props.cardComponent}
        <Text style={styles.sheetText}>
          {removeId}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  bottomSheetContainer: {
    position: 'absolute',
    left: horizontalScale(0),
    right: horizontalScale(0),
    bottom: verticalScale(-2),
    height: verticalScale(300),
    backgroundColor: '#ffffff',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  sheetText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'black',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: verticalScale(0),
    left: horizontalScale(0),
    right: horizontalScale(0),
    bottom: verticalScale(0),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export default BottomSheet;


//OLD CODE

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Animated, BackHandler, TouchableWithoutFeedback } from 'react-native';
// import { moderateScale, verticalScale } from '../styles/Metric';
// import BookmarkCard from './BookmarkCard';

// const BottomSheet = (props) => {
//   const [sheetVisible, setSheetVisible] = useState(false);
//   const [removeId, setRemoveId] = useState(null);
//   const bottomSheetHeight = 300; 

//   const toggleSheet = () => {
//     setSheetVisible(!sheetVisible);
//   };

//   const hideSheet = () => {
//     setSheetVisible(false);
//   };

//   const bottomSheetStyle = {
//     transform: [
//       {
//         translateY: sheetVisible ? 0 : bottomSheetHeight,
//       },
//     ],
//   };

//   useEffect(() => {
//     const backAction = () => {
//       if (sheetVisible) {
//         hideSheet();
//         return true; 
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     return () => {
//       backHandler.remove();
//     };
//   }, [sheetVisible]);

//   const toggleRemovePopup = (id) =>{
//     console.log("THIS IS REMOVAL PROMPT: "+id)
//     setRemoveId(id)
//     setSheetVisible(!sheetVisible);
//   }

//   return (
//     <View style={styles.container}>
      
//       {/* <BookmarkCard removeSheet={toggleRemovePopup} id="13" titleText="13 visual design fundamentals that UX designers need to possess in 2023" timeElapsed="17 hours ago" content="When I was studying visual communications design in college this is what I learnt from the course"></BookmarkCard> */}
//         {props.children 
//         &&
//         (
//           (Array.isArray(React.Children.toArray(props.children))
//           &&
//           React.Children.map(
//             props.children, (child) =>{
//               return React.cloneElement(child, {removeSheet:toggleRemovePopup})
//             }
//           ))
//           ||
//           (Array.isArray(React.Children.toArray(props.children))
//           &&
//           React.cloneElement(props.children,{removeSheet: toggleRemovePopup})
//           )
//         )
        
//         }

//       {sheetVisible && <TouchableWithoutFeedback onPress={hideSheet} style={styles.backgroundOverlay}>
//         <View style={styles.backgroundOverlay} />
//       </TouchableWithoutFeedback>}

//       <Animated.View style={[styles.bottomSheetContainer, bottomSheetStyle]}>
//         {props.cardComponent}
//         <Text style={styles.sheetText}>
//           {removeId}</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: moderateScale(10),
//     backgroundColor: '#ff8c00',
//     borderRadius: moderateScale(5),
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: moderateScale(18),
//   },
//   bottomSheetContainer: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: -2,
//     height: verticalScale(300),
//     backgroundColor: '#ffffff',
//     borderTopLeftRadius: moderateScale(20),
//     borderTopRightRadius: moderateScale(20),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'yellow'
//   },
//   sheetText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   backgroundOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//   },
// });

// export default BottomSheet;
