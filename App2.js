import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}
const Cat2 = (props) => {
  return (
    <View>
      <Text>I am also a cat! my name is {props.name}</Text>
    </View>
  )
}

const Cat = () => {
  // const name = "Maru";
  return(
    <view>
      <Text>
        Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
      </Text>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="Name me!"
      />
      <Image
        source={{uri:"https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Cat2 name="Cacu"/>
      <Cat2 name="Jellylorum"/>
      <Cat2 name="Spot"/>
    </view>
  );
}

export default Cat;