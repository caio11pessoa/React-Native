import React from 'react';
import {View} from 'react-native';

const FlexDirectionBasics = () => {
    return (
        <View style={{
            flex:1, 
            flexDirection: 'column-reverse', 
            justifyContent:'space-around'}}>
            <View style={{ width:250, height: 150, backgroundColor: 'powderblue'}}/>
            <View style={{ width:150, height: 150, backgroundColor: 'skyblue'}}/>
            <View style={{ width:350, height: 150, backgroundColor: 'steelblue'}}/>
            
        </View>
    )
}

export default FlexDirectionBasics;