import React from 'react';
import { Text, TextInput, View } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}
const Cat2 = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
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
      <Cat2 />
      <Cat2 />
      <Cat2 />
    </view>
  );
}

export default Cat;