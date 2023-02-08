import { Image, Platform, Pressable, StyleSheet, Text, TextInput, View  } from 'react-native'
import React, { useState } from 'react'

export default function LoginBox() {

    const [isEmailFocus, SetIsEmailFocus] = useState(false);
    const [isPasswordFocus, SetIsPasswordFocus] = useState(false);
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, SetError] = useState();

    const handleEmailFocus = () => SetIsEmailFocus(true);

    const handlePasswordFocus = () => SetIsPasswordFocus(true);

    const handleInputBlur =()=>{
        SetIsEmailFocus(false); 
        SetIsPasswordFocus(false);
    }

    const handlePress = () => {
        SetError();
        if(email && password){
            /**Checking for valid email format */
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                console.log("Email is Not Correct");
                SetError("Invalid email");
                return false;
            }else{
                /**Send login details to server */
                handleLogin();
            }
            //alert(email+' '+password);
        }else{
            SetError("Empty inputs");
        }
    }

    function handleLogin (){
        const Buffer = require("buffer").Buffer;
        let encodedEmail = new Buffer(email).toString("base64");
        let encodedPassword = new Buffer(password).toString("base64");
        //const token = [encodedEmail,encodedPassword];
        const data = [];
        data.push(encodedEmail);
        data.push(encodedPassword);
        //console.log(data);
        //console.log(JSON.stringify(data));

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://msginc.ml/api/auth?utm_source=origin&utm_medium=ReactNativeAppAndroid");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};
        let token = data;
          

        //xhr.send(token);

        const token2 = [email,password];
        const params = {
            email: email,
            password: password,
        }
        console.log(params);  

        const http = new XMLHttpRequest()
        http.open('POST', 'http://msginc.ml/rn.php')
        //http.setRequestHeader("Accept", "application/json")
        //http.setRequestHeader('Content-type', 'application/json')
        http.send(token2) // Make sure to stringify
        http.onload = function() {
            // Do whatever with response
            alert(http.responseText)
        }
        
    }


    const ImageSource = require("../assets/oceangreenLogo.jpeg")
  return (
    <View style={styles.loginBox}>
        <Image source={ImageSource} style={styles.logo} />
        <View style={styles.inputBox}>
            { /**Showing Errors if any */
                error != null
                ?   <View style={styles.errorBox}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                : null
            }
            

            <TextInput 
                style={[styles.input,{borderColor: isEmailFocus?"#80bdff":"#ced4da"}]} 
                onFocus={handleEmailFocus}
                onBlur={handleInputBlur}
                placeholder='Email'
                onChangeText={SetEmail}
            />
            
            <TextInput 
                style={[styles.input,{borderColor: isPasswordFocus?"#80bdff":"#ced4da"}]} 
                onFocus={handlePasswordFocus}
                onBlur={handleInputBlur}
                placeholder='Password' 
                onChangeText={SetPassword}
                secureTextEntry={true}
            />
            <Pressable 
                style={styles.loginButton}
                android_ripple={{color:"#000"}}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginBox:{
        //minWidth: Platform.OS == 'web' ? 300 : '90%' ,
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
    errorBox:{
        backgroundColor:'#ff000050',
        marginBottom:20,
        padding:10,
        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
        
    },
    errorText:{
        color:'red',
        fontSize:14,
        fontWeight:'500',
        textAlign:"center"
    },
});