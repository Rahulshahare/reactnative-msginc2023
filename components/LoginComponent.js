import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginBox from './LoginBox';

export default function LoginComponent() {
  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text style={styles.headingText}>MSGINC</Text></View>
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
    heading:{
        backgroundColor:"#343a40",
        //height:"10%",
        padding:15,
        paddingTop:20,
        paddingBottom:20,
        borderTopColor:"#fff",
        //borderTopWidth:1
    },
    headingText:{
        color:"#fff", 
        fontSize:20,
    },
});