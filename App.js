import { useState } from 'react';
import { View } from 'react-native';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MsgStore } from './store/Store';

const Stack = createNativeStackNavigator();
//isLogin  ? <HomeComponent/> : <LoginComponent/>
export default function App() {
  const [isLogin, SetIsLogin] = useState(false);
  const isLoggedIn = MsgStore.useState(s => s.isLoggedIn);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
          !isLoggedIn?(
            <Stack.Screen 
              name="MSGINC" 
              component={LoginComponent}
              options={{
                headerStyle: {
                  backgroundColor: '#343a40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          ):(
            <Stack.Screen name="Home" component={HomeComponent}/>
          )
          }
          
        </Stack.Navigator>
      </NavigationContainer>
    )
    
    
};



