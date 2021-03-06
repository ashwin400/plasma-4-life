import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from "../Profilescreen"
import { MaterialIcons } from '@expo/vector-icons';
import Mainscreen from "../Mainscreen";
import Discussion from "../DiscussionScreen";
import HomePage from "../HomeScreen";
import { AntDesign } from '@expo/vector-icons';


export default function BottomNav(){
  const Tab = createMaterialBottomTabNavigator();

  return (
    
    <Tab.Navigator initialRouteName="Main" barStyle={{ backgroundColor: '#ffffff' }}>
      <Tab.Screen name="Main" component={HomePage}
      options={{
        tabBarIcon:()=>(
          <AntDesign name="home" size={24} color="black" />
        ) }}
        />
      <Tab.Screen name="Search" component={Mainscreen} 
        options={{
        tabBarIcon:()=>(
          <MaterialIcons name="search" size={24} color="black" />
        ) }
      }
      />
      {/* <Tab.Screen name="Requests" component={Discussion} 
        options={{
        tabBarIcon:()=>(
          <AntDesign name="swap" size={24} color="black" />
        ) }
      }
      /> */}
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon:()=>(
          <MaterialIcons name="account-circle" size={24} color="black" />
        ) }
      }/>
    </Tab.Navigator>
    
  );}