import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default function HomeComponent() {
    return (
      <View style={styles.container}>
        <Text>HomeComponent</Text>
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
