import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState,  useEffect,  } from 'react'
import { MsgStore } from '../store/Store';
import { useStoreState } from 'pullstate';
import FriendPic from './FriendPic';
import { useNavigation } from '@react-navigation/native';

export default function FriendListComponent() {
    const MsgStoreState = useStoreState(MsgStore);
    //const img = MsgStoreState.userDetails.img;
    const [friendData, SetFriendData] = useState('');

    useEffect(() => {
      setData();
        // SetFriendData(MsgStoreState.friendList);
        
    });

    const setData = ()=>{
      SetFriendData(MsgStoreState.friendList);
    }

    const UserList = () => {
      const navigation = useNavigation();
        return (
          <ScrollView>
            {friendData.map((item, index) => (
              <Pressable 
                key={item.id}
                android_ripple={{color:"#343a40"}}
                onPress={() => navigation.navigate('Messages',{userName:item.username, userTwoId:item.id})}
              >
                <View  style={styles.friendList}>
                  <View style={styles.friendPic}>
                      <FriendPic url={item.img} id={item.id} index={index}/>
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

    


    

    const renderList = friendData == '' ? <ActivityIndicator/>   : UserList();

  return (
    <View style={styles.friendListBox}>
        <Text style={styles.title}>FRIENDS</Text>
              
            <>
            {renderList}   
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