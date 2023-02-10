import { useState } from 'react';
import { Button } from 'react-native';
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

  const handleLogout = () =>{
    MsgStore.update(s => {s.isLoggedIn = false})
    MsgStore.update(s => {s.userDetails = ''});
  }
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
            <Stack.Screen 
              name="MSGINC" 
              component={HomeComponent}
              options={{
                headerStyle: {
                  backgroundColor: '#343a40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <Button
                    onPress={handleLogout}
                    title="Logout"
                    color="#000"
                  />
                ),
              }}
            />
          )
          }
          
        </Stack.Navigator>
      </NavigationContainer>
    )
    
    
};



