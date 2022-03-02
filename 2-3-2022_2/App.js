import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import MenuScreen from "./screens/MenuScreen";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserStoreProvider from './context/UserContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //structure for navigation drawer
  const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'HomeScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'skyblue'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{title:'หน้าหลัก'}}
        />
        <Stack.Screen 
          name='AboutScreen' 
          component={AboutScreen} 
          options={{title:'เกี่ยวกับ'}}
        />
        <Stack.Screen 
          name='RegisterScreen' 
          component={RegisterScreen} 
          options={{title:'ลงทะเบียน'}}
        />
        <Stack.Screen 
          name='LoginScreen' 
          component={LoginScreen} 
          options={{title:'เข้าสู่ระบบ'}}
        />
    </Stack.Navigator>
  );
}

function ProductScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'ProductScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'skyblue'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='ProductScreen' 
          component={ProductScreen} 
          options={{title:'สินค้า'}}
        />
        <Stack.Screen 
          name='DetailScreen' 
          component={DetailScreen} 
          options={{title:'รายละเอียด'}}
        />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContentOptions={{ activeTintColor:'pink', itemStyle:{marginVertical:5} }}
          drawerContent = {(props)=><MenuScreen {...props}/>}
        >
          <Drawer.Screen 
            name='HomeScreenStack' 
            component={HomeScreenStack} 
            options={{
              drawerLabel:'HomeScreenStack'
              }}
            />
          <Drawer.Screen 
            name='ProductScreenStack' 
            component={ProductScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserStoreProvider>
  );
}

export default App
