import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenOne} from './Screens/ScreenOne';
import {ScreenTwo} from './Screens/ScreenTwo';

// Stack Navigator
const RootStackNav = createStackNavigator();
const PrivateNav = createDrawerNavigator();

export function RootStack() {
  return (
    <RootStackNav.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        animationEnabled: false,
      })}>
      <RootStackNav.Screen name="PrivateStack" component={PrivateStack} />
    </RootStackNav.Navigator>
  );
}

// Drawer Stack
function PrivateStack() {
  return (
    <PrivateNav.Navigator>
      <PrivateNav.Screen name="Main" component={MainStack} />
    </PrivateNav.Navigator>
  );
}

// Main Stack
const MainStackNav = createStackNavigator();
const MainStack = () => {
  return (
    <MainStackNav.Navigator>
      <MainStackNav.Screen name="one" component={ScreenOne} />
      <MainStackNav.Screen name="two" component={ScreenTwo} />
    </MainStackNav.Navigator>
  );
};
