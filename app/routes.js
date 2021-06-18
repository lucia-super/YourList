import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/home/Home';
import List from './pages/list/List';

const Router = () => {
  const Tab = createMaterialBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '主页',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarLabel: '列表',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default Router;
