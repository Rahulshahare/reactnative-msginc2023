import { useState } from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MsgStore } from './store/Store';

import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import MessageComponent from './components/MessageComponent';
import ChatTitleComponent from './components/ChatTitleComponent';

const Stack = createNativeStackNavigator();
//isLogin  ? <HomeComponent/> : <LoginComponent/>
export default function App() {
  const [isLogin, SetIsLogin] = useState(false);
  const isLoggedIn = MsgStore.useState(s => s.isLoggedIn);

  const handleLogout = () =>{
    MsgStore.update(s => {s.isLoggedIn = false})
    MsgStore.update(s => {s.userDetails = ''});
    MsgStore.update(s => {s.friendList = ''});
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
            <Stack.Group screenOptions={{
              headerStyle: {
                backgroundColor: '#343a40',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            
            }}>
              <Stack.Screen 
                name="MSGINC" 
                component={HomeComponent}
                options={{
                  headerStyle: {
                    backgroundColor: '#343a40',
                    textTransform:'capitalize',
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
              <Stack.Screen 
                name='Messages' 
                options={({ route }) => ({ 
                  //title: route.params.userName.toUpperCase(),
                  //headerTitle: props => <LogoTitle {...props} />
                  headerTitle: props => <ChatTitleComponent {...props} />
                })}
                component={MessageComponent}
              />
          </Stack.Group>
            
          )
          }
          
        </Stack.Navigator>
      </NavigationContainer>
    )
    
    
};



