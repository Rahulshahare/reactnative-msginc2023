import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { MsgStore } from '../store/Store';
import { useStoreState } from 'pullstate';



export default function HomeComponent() {
  
  const MsgStoreState = useStoreState(MsgStore);
  const handleLogut = () =>{
    MsgStore.update(s =>{ s.isLoggedIn = false});
  }
  function PrintDE(){
    console.log(MsgStoreState.userDetails.username);
  }
    return (
      <View style={styles.container}>
        <Text>{MsgStoreState.userDetails.username}</Text>
        <StatusBar style="auto"/>
        <Button title='Logout' onPress={handleLogut}/>
        <Button title='print' onPress={ PrintDE }/>
      </View>
    )
    
    
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
  },
});
