import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default function ProfileComponent() {
    return (
      <View style={styles.container}>
        <Text>ProfileComponent</Text>
        <StatusBar style="auto"/>
      </View>
    )
    
    
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
  },
});
