import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { News } from "./screens";
import { TNewsRoutes } from "shared/types/TNewsRoutes.type";
import { ENewsRoutes } from "shared/enums/ERoutes.enum";

export const NewsStack = createStackNavigator<TNewsRoutes>();
export const NewsStackScreens = () => (
  <NewsStack.Navigator
    initialRouteName={ENewsRoutes.news}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <NewsStack.Screen name={ENewsRoutes.news} component={News} />
  </NewsStack.Navigator>
);
