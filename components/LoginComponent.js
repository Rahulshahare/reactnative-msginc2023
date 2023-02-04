import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginBox from './LoginBox';

export default function LoginComponent() {
  return (
    <View style={styles.container}>
        <LoginBox/>
      <StatusBar styles="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#00000010",
    },
});