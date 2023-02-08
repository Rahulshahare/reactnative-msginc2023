import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet,  TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import LoginBox from './LoginBox';

export default function LoginComponent() {
  return (
    <KeyboardAvoidingView 
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LoginBox/>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#00000010",
        //alignItems:'center',
    },
});