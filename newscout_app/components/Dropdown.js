import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import React, { useState } from 'react'
import * as Colors from '../styles/Colors'

const Dropdown = (props) => {

  const [opened, setOpened] = useState(false); 
  
  console.log("CLOGSONE: "+props.data.title);
  const up = require("../assets/icons/up_arrow_secondary.png");
  const down = require("../assets/icons/down_arrow_primary.png");

  const acpressed = () =>{
    setOpened(!opened)
  }

  return (  
    <View>
      <List.Accordion
        style={[styles.title,opened?styles.opened:null]}
        title={props.data.title}
        right={props => <List.Icon icon={opened?up:down}></List.Icon>}
        onPress={acpressed}
        >
          {
            props.data.topics.map(topic => 
            <List.Item key={topic} title={topic}/>
              )
          }
      </List.Accordion>
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  opened:{
    backgroundColor: Colors.basePrimaryColor,
  }
})