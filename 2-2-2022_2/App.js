import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack(){
  return(
    <Stack.Navigator
      initialRouteName = 'HomeScreen'
    >
        <Stack.Screen 
          name = 'HomeScreen'
          component = {HomeScreen}
          options = {{title : 'Home Page'}}
        />
    </Stack.Navigator>
  )
}

function SettingScreenStack(){
  return(
    <Stack.Navigator
      initialRouteName = 'SettingScreen'
    >
        <Stack.Screen 
          name = 'SettingScreen'
          component = {SettingScreen}
          options = {{title : 'Setting Page'}}
        />
        <Stack.Screen 
          name = 'ProfileScreen'
          component = {ProfileScreen}
          options = {{title : 'Profile Page'}}
        />
    </Stack.Navigator>
  )
}

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({route}) => ({
          tabBarIcon:({focused}) => {
              let imgPath;
              // === คือเช็คประเภทข้อมูลด้วย
              if(route.name === 'Home'){
                imgPath = focused?require('./assets/logo1.png'):require('./assets/logo2.png');
              }
              else if (route.name ==='Setting'){
                imgPath = focused?require('./assets/logo1.png'):require('./assets/logo3.png');
              }
              return <Image source = {imgPath} style = {{width: 30, height: 30, padding: 0}}/>
            }
          })}
        tabBarOptions = {{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name = 'Home'
          component = {HomeScreenStack}
        />
        <Tab.Screen
          name = 'Setting'
          component = {SettingScreenStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
