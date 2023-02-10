import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MsgStore } from '../store/Store';
import { useStoreState } from 'pullstate';

export default function FriendListComponent() {
    const MsgStoreState = useStoreState(MsgStore);
    //const img = MsgStoreState.userDetails.img;
    const [imgSource, SetImgSource] = useState('');

    const loadImageFromUrl = (imageToGet) =>{
        var data = new FormData();
            data.append('identity', 'ReactNativeApp');
            data.append('imageName', 'rutuj.jpg');

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://msginc.ml/imgtobase.php?imageName='+imageToGet, true);
            xhr.onload = function () {
                // do something to response
                 //console.log(this.responseText);
                 SetImgSource(this.responseText);
            };
            xhr.send(data);
    }
    function GetFrindList(){
        //console.log(MsgStoreState.userDetails.img);
        //console.log(imgSource);
        if(MsgStoreState.userDetails.img != undefined){
            loadImageFromUrl(MsgStoreState.userDetails.img); 
        }
        
    }

    useEffect(() => {
        GetFrindList();
      });

  return (
    <View style={styles.friendListBox}>
        <Text style={styles.title}>FRIENDS</Text>
        <ScrollView>
            <View style={styles.friendList}>
                <View style={styles.friendPic}>
                    {
                        imgSource == '' ? <ActivityIndicator style={{width:70, height:70}}/> :
                    
                        <Image source={{uri: imgSource}}
                                style={{width: 70, height: 70,borderRadius:50,}}
                        />
                    }
                </View>
                <View style={styles.friendName}><Text>Name</Text><Text>Last</Text></View>
            </View>
            
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    friendListBox:{
        flex:1,
        //backgroundColor:"#09f",
        borderTopColor:'#343a40',
        borderTopWidth:1,
    },
    title:{
        color:'#fff',
        fontSize:20,
        backgroundColor:'#343a40',
        paddingLeft:20,
        padding:10,
        fontWeight:'500',
    },
    friendList:{
        flexDirection:'row',
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:'#343a406b',
    },
    friendPic:{
        //flex:0.30,
        borderColor:"#343a406b",
        borderWidth:1,
        borderRadius:50,
        padding:1,
        marginRight:20,
    },
    friendName:{
        flex:1,
        borderColor:"#fff",
        borderWidth:1,
        padding:10,
    },
});