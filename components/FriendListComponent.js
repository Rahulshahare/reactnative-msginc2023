import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MsgStore } from '../store/Store';
import { useStoreState } from 'pullstate';
import FriendPic from './FriendPic';

export default function FriendListComponent() {
    const MsgStoreState = useStoreState(MsgStore);
    //const img = MsgStoreState.userDetails.img;
    const [imgSource, SetImgSource] = useState('');
    const [friendData, SetFriendData] = useState('');

    const loadImageFromUrl = (imageToGet) =>{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://msginc.ml/imgtobase.php?imageName='+imageToGet, true);
            xhr.onload = function () {
                // do something to response
                 //console.log(this.responseText);
                 SetImgSource(this.responseText);
            };
            xhr.send();
    }
    

    const UserList = () => {
        return (
          <ScrollView>
            {friendData.map(item => (
            <Pressable android_ripple={{color:"#343a40"}}>
              <View key={item.id} style={styles.friendList}>
              <View style={styles.friendPic}>
                  <FriendPic url={item.img} />
              </View>
              <View style={styles.friendName}>
                <Text style={styles.friendNameTitle}>{item.username}</Text>
                <Text style={styles.friendLastLogin}>{item.last_login_dt}</Text>
            </View>
          </View>
          </Pressable>
            ))}
          </ScrollView>
        );
      };

    


    useEffect(() => {
        SetFriendData(MsgStoreState.friendList);
      });

  return (
    <View style={styles.friendListBox}>
        <Text style={styles.title}>FRIENDS</Text>
              
            <>
            { friendData == '' ? <ActivityIndicator/>   : UserList()}   
            </>  
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
        alignItems:'center',
        padding:15,
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
        //borderColor:"#fff",
        //borderWidth:1,
        padding:10,
    },
    friendNameTitle:{
        fontSize:18,
        fontWeight:'500',
        textTransform:'capitalize',
        marginBottom:5,
    },
});