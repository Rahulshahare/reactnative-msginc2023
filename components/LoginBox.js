import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function LoginBox() {

    const [isEmailFocus, SetIsEmailFocus] = useState(false);
    const [isPasswordFocus, SetIsPasswordFocus] = useState(false);

    const handleEmailFocus = () => SetIsEmailFocus(true);

    const handlePasswordFocus = () => SetIsPasswordFocus(true);

    const handleInputBlur =()=>{
        SetIsEmailFocus(false); 
        SetIsPasswordFocus(false);
    }

    const ImageSource = require("../assets/oceangreenLogo.jpeg")
  return (
    <View style={styles.loginBox}>
        <Image source={ImageSource} style={styles.logo} />
        <View style={styles.inputBox}>
            <TextInput 
                style={[styles.input,{borderColor: isEmailFocus?"#80bdff":"#ced4da"}]} 
                onFocus={handleEmailFocus}
                onBlur={handleInputBlur}
                placeholder='Email'
            />
            <TextInput 
                style={[styles.input,{borderColor: isPasswordFocus?"#80bdff":"#ced4da"}]} 
                onFocus={handlePasswordFocus}
                onBlur={handleInputBlur}
                placeholder='Password' 
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginBox:{
        backgroundColor:"#fff",
        padding:15,
        paddingBottom:50,
        paddingTop:50,
        margin:15,
        marginTop:30,
        //flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.5,

        elevation: 0.5,
    },
    logo:{
        width:80,
        height:80,
        alignContent:'center',
        marginBottom:50,
        borderRadius:10,
    },
    inputBox:{
        width:"100%",
    },
    input:{
        borderWidth:1,
        padding:10,
        marginBottom:20,
        borderRadius:5,
        borderColor:"#09f",
        fontSize:16,
        color:"#09f",
    },
    loginButton:{
        borderColor:"#007BFF",
        backgroundColor:"#077BFF",
        borderWidth:1,
        padding:10,
        alignItems:'center',
    },
    buttonText:{
        color:"#fff", 
        fontSize:20,
    },
});