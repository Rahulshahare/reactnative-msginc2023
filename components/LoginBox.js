import { Image, Platform, Pressable, StyleSheet, Text, TextInput, View ,StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native-web';

export default function LoginBox() {

    const [isEmailFocus, SetIsEmailFocus] = useState(false);
    const [isPasswordFocus, SetIsPasswordFocus] = useState(false);
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, SetError] = useState();
    const [disabledPressable, SetDisabledPressable] = useState(false);

    const handleEmailFocus = () => SetIsEmailFocus(true);

    const handlePasswordFocus = () => SetIsPasswordFocus(true);

    const handleInputBlur =()=>{
        SetIsEmailFocus(false); 
        SetIsPasswordFocus(false);
    }

    const handlePress = () => {
        SetDisabledPressable(true);
        SetError();
        if(email && password){
            /**Checking for valid email format */
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                //console.log("Email is Not Correct");
                SetError("Invalid email");
                SetDisabledPressable(false);
                return false;
            }else{
                /**Send login details to server */
                setTimeout(function() {
                    handleLogin();
                   }, 2000);
                   //SetDisabledPressable(false);
                
            }
            //alert(email+' '+password);
        }else{
            SetError("Empty inputs");
            SetDisabledPressable(false);
        }

        
    }

    function handleLogin (){
        const Buffer = require("buffer").Buffer;
        let encodedEmail = new Buffer(email).toString("base64");
        let encodedPassword = new Buffer(password).toString("base64");
              

        var data = new FormData();
            data.append('identity', 'ReactNativeApp');
            data.append('email',  encodedEmail);
            data.append('password', encodedPassword);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://msginc.ml/api/auth?utm_source=reactNativeApp', true);
            xhr.onload = function () {
                // do something to response
                // console.log(this.responseText);
                if(this.responseText != ''){
                    console.log(this.responseText);
                    var returnObject = JSON.parse(this.responseText);
                    //console.log(returnObject.identification);

                        if(returnObject.loggedIn == 'YES'){
                            SetError(returnObject.userDetails.username)
                        }else{
                            SetError(returnObject.error)
                        }
                }
            };
            xhr.send(data);
        

            SetDisabledPressable(false);
    }


    const ImageSource = require("../assets/oceangreenLogo.jpeg")
  return (
    <View style={styles.loginBox}>
        <StatusBar barStyle="light-content" backgroundColor="#343a40" />
        <Image source={ImageSource} style={styles.logo} />
        <View style={styles.inputBox}>
            { /**Showing Errors if any */
                error != null
                ?   <View style={styles.errorBox}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                :   null
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
                style={[styles.loginButton, { backgroundColor: disabledPressable ? "#077bffc4" : "#077BFF"}]}
                android_ripple={{color:"#000"}}
                onPress={handlePress}
                disabled={disabledPressable}
            >  
                <Text style={styles.buttonText}>{!disabledPressable ? 'Login' : 'Please wait...'}</Text>
                
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
        fontWeight:'700',
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