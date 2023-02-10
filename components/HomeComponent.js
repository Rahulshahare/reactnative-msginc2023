import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { MsgStore } from '../store/Store';
import { useStoreState } from 'pullstate';
import FriendListComponent from './FriendListComponent';



export default function HomeComponent() {
  
  const MsgStoreState = useStoreState(MsgStore);
  function PrintDE(){
    console.log(MsgStoreState.userDetails.username);
  }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#343a40" />
        <View style={styles.greetingBox}>
            <Text style={styles.greetingText}>
              Hi, <Text style={styles.greetingName}>{MsgStoreState.userDetails.username}</Text>
            </Text>
        </View>
        <FriendListComponent/>
      </View>
    )
    
    
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetingBox:{
    padding:20,
    //backgroundColor:'#09ffff',
  },
  greetingText:{
    color:'#343a40',
    fontSize:24,
  },
  greetingName:{
    fontWeight:'bold',
    textDecorationLine:'underline',
    textTransform:'capitalize',
  },
});
