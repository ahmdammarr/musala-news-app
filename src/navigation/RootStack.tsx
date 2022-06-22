import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabsNavigator';
import { TRootRoutes } from 'shared/types';

export const RootStack = createStackNavigator<TRootRoutes>();


export const RootStackNavigator = () => {
  return <BottomTabNavigator />
};





