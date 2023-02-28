import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MsgStore } from '../store/Store'

const ChatTitleComponent = () => {
    const idOfUserTwo = MsgStore.useState(s =>s.userTwoId);
    const FriendList = MsgStore.useState(s => s.friendList);
    const [UserName, setUserName] = useState('');
    const [UserImge, setUserImage] = useState('');
    const [IsOnline, setIsOnline] = useState('');

    useEffect(() => {
        ChatDetails();
          
      });

    const ChatDetails = ()=>{ 
        FriendList.map((item, indexed)=>{
            if(item.id == idOfUserTwo){
                setUserName(item.username)
                setUserImage(item.new_image)
                setIsOnline(item.online)
                
            }
        })
    }
    
  return (
            <View style={styles.container}>
                { UserImge 
                    ?   <Image
                            source={{ uri: UserImge }}
                            style={{ 
                                width: 40, 
                                height: 40,
                                borderRadius:50,
                                backgroundColor:"#fff",
                                borderColor:"#343a406b",
                                borderWidth:1, 
                                marginRight:10
                            }}
                        />
                    : <ActivityIndicator/>
                }
                <Text style={{color:"#fff", fontWeight:'bold',fontSize:24, textTransform:'capitalize'}}>{UserName}</Text>
            </View>
    )
}

export default ChatTitleComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginLeft:0,
    },
});