import React from 'react';
import { Text } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
  const name = "Maru";
  return(
    <text>
      Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
    </text>
  );
}

export default Cat;