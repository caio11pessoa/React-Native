import React from 'react';
import {View} from 'react-native';

const FlexDirectionBasics = () => {
    return (
        <View style={{
            flex:1, 
            flexDirection: 'column', 
            justifyContent:'center',
            alignItems:'center'
            }}>
            <View style={{alignSelf:'flex-end', width:100, height: 100, backgroundColor: 'powderblue'}}/>
            <View style={{ width:100,height:100, backgroundColor: 'skyblue'}}/>
            <View style={{ width:100,height:150, backgroundColor: 'steelblue'}}/>
            
        </View>
    )
}

export default FlexDirectionBasics;