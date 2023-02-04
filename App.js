import { useState } from 'react';
import { View } from 'react-native';
import HomeComponent from './components/HomeComponent';
import ProfileComponent from './components/ProfileComponent';
import LoginComponent from './components/LoginComponent';

export default function App() {
  const [isLogin, SetIsLogin] = useState(false);
    return (
      isLogin  ? <HomeComponent/> : <LoginComponent/>
    )
    
    
};



