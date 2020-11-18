import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native';

const app = () => {
    return <Text>{Platform.OS+ Platform.Version}</Text>
}
export default app;