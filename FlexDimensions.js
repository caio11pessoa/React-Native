import React from 'react';
import {View} from 'react-native';

const flexDimensionsBasics = () => {
    return <View style={{flex: 1}}>
        <View style={{flex: 45, backgroundColor:'powderblue'}}/>
        <View style={{flex: 500, backgroundColor:'skyblue'}}/>
        <View style={{flex: 30, backgroundColor:'steelblue'}}/>
    </View>
}

export default flexDimensionsBasics;