
// import React from 'react';
// import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

// const ParentComponent = () => {
//   const handlePress1 = () => {
//     console.log('TouchableHighlight 1 pressed');
//   };

//   const handlePress2 = () => {
//     console.log('TouchableHighlight 2 pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableHighlight
//         style={styles.touchable1}
//         onPress={handlePress1}
//       >
//         <Text>TouchableHighlight 1</Text>
//       </TouchableHighlight>

//       <TouchableHighlight
//         style={styles.touchable2}
//         onPress={handlePress2}
//       >
//         <Text>TouchableHighlight 2</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   touchable1: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     marginRight: 10,
//   },
//   touchable2: {
//     backgroundColor: 'lightgreen',
//     padding: 10,
//   },
// });

// export default ParentComponent;



import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ModalCard from './ModalCard'
import Dropdown from './Dropdown'
import CollapsibleCard from './CollapsibleCard'
import NewsCard from './NewsCard'
import BookmarkCard from './BookmarkCard'
import Bookmark from './Bookmark'
import MoreOptionIcon from './MoreOptionIcon'
import { horizontalScale } from '../styles/Metric'
import PopUpMenu from './PopupMenu'
import SimpleMenu from './PopupMenu'
import PopupMenu from './PopupMenu'
import SearchResultCard from './SearchResultCard'
import BottomSheet from './BottomSheet'
import SubmitButton from './SubmitButton'
import ImageCard from './ImageCard'
import HomePageCard from './HomePageCard'
import SignIn from '../screens/SignIn'
import CheckboxCard from './CheckboxCard'
import GuestHomePage from '../screens/GuestHomePage'
import HorizontalSlidingMenu from './HorizontalMenu'
import ScrollableList from './ScrollableList'
import TextInputBox from './TextInputBox'
import BottomNavigationBar from './BottomNavigationBar'

const data = [{
  "id": 1,
  "title": "Sector Update",
  "icon": "../assets/icon/Sector_Update.png",
  "selected_icon": "",
  "topics" : ['Banking', 'Retail', 'Transport', 'Food & Drink']
},
{
  "id": 2,
  "title": "Regional Update",
  "icon": "../assets/icon/Regional_Update.png",
  "selected_icon": "",
  "topics" : ['Transport', 'Banking', 'Food & Drink'],
}
]

nbar = [{
 'label': 'Home',
},
{
  'label': 'Service'
},
{
  'label': 'Cars'
},
{
  'label': 'Flight'
}
]

const horizontalMenuItems = ['All','Tech','Banking','Retail','Politics','Entertainment']

const Tempscreen = (props) => {

  const [activeItem, setActiveItem] = useState(0);

  const moreOptionImage = props.image!=null?props.image:require('../assets/icons/moreoption_icon_red.png')

  const toggleBottomSheet = (id) => {
    console.log("SHOW BOTTOM REMOVE SHEET: "+id)
  }

  const emailInput = (text) =>{
    console.log(text)
  }

  const tempBNFunc = (index) =>{
    console.log("BN: "+nbar[index]['label'])
    setActiveItem(index)
  }

  const testText = "THIS IS TEST TEXT SAMOSA"

  return (
    <View style={styles.container}>
      {/* {data.map(content=>
        <Dropdown key={content.id} data={content}/>
        )} */}

      {/* {data.map(content=>
        <CollapsibleCard key={content.id} data={content}/>
        )}  */}

      {/* <ModalCard buttonText="Login" content="You are not logged in. Sign in or log in to bookmark news leave comment and to explore more!"></ModalCard> */}

      {/* <NewsCard titleText="Lorem Ipsum Title" textBlurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry." ></NewsCard> */}

      {/* <BottomSheet></BottomSheet> */}

      {/* {data.map(content => (
        <BookmarkCard
          removeSheet={toggleBottomSheet}
          key={content.id}
          id={content.id}
          titleText={content.title}
          content={content.topics}></BookmarkCard>
      ))}
      <BookmarkCard titleText="6 visual design fundamentals that UX designers need to possess in 2023" timeElapsed="17 hours ago" content="When I was studying visual communications design in college this is what I learnt from the course"></BookmarkCard> */}

      {/* <SearchResultCard></SearchResultCard> */}

      {/* <BottomSheet cardComponent={<Text style={{color:'black'}}>This is samosa speaking</Text>}>
        {data.map(content => (
        <BookmarkCard
          removeSheet={toggleBottomSheet}
          key={content.id}
          id={content.id}
          titleText={content.title}
          content={content.topics}></BookmarkCard>
      ))}
      <BookmarkCard id="9" titleText="6 visual design fundamentals that UX designers need to possess in 2023" timeElapsed="17 hours ago" content="When I was studying visual communications design in college this is what I learnt from the course"></BookmarkCard>
      <BookmarkCard id="9" titleText="6 visual design fundamentals that UX designers need to possess in 2023" timeElapsed="17 hours ago" content="When I was studying visual communications design in college this is what I learnt from the course"></BookmarkCard>
      </BottomSheet> */}

      {/* <BottomSheet></BottomSheet> */}

       {/* <ImageCard authorText="by Ryan Ya"></ImageCard> */}

      {/* <ImageCard authorText="by Ryan Ya"></ImageCard>
      <ImageCard authorText="by Ryan Ya"></ImageCard> */}

      {/* <HomePageCard></HomePageCard>
      <HomePageCard></HomePageCard>
      <HomePageCard></HomePageCard> */}
      <HomePageCard titleText="Haaland scores a hattrick" blurbText="This is his 6th hattrick this season and he seems to be the next prodigy in the world of football" category="Sports" timeElapsed="7 mins" image={require('../assets/images/pubg.png')}></HomePageCard>


       {/* <SignIn></SignIn> */}
    
      {/* <BookmarkCard removeSheet={toggleBottomSheet} titleText="6 visual design fundamentals that UX designers need to possess in 2023" timeElapsed="17 hours ago" content="When I was studying visual communications design in college this is what I learnt from the course"></BookmarkCard>  */}
      {/* <CheckboxCard></CheckboxCard>
      <CheckboxCard></CheckboxCard>
      <CheckboxCard></CheckboxCard> */}

      {/* <GuestHomePage></GuestHomePage> */}
      {/* <HorizontalSlidingMenu menuItems={horizontalMenuItems}></HorizontalSlidingMenu> */}
      {/* <TextInputBox onChange={emailInput}></TextInputBox> */}
      {/* <BottomNavigationBar activeItem={activeItem} navigationItems={nbar} onItemPress={tempBNFunc}></BottomNavigationBar> */}
      {/* <Bookmark></Bookmark> */}


    </View>
  );
}

export default Tempscreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  tempText:{
    color: '#777F88',
    backgroundColor: 'yellow'
  },
  moreOptionIcon:{
    
  }
})