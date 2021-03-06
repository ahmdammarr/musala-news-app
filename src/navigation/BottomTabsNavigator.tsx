import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";
import { EBottomTabsRoutes } from "shared/enums/EBottomTabsRoutes.enum";
import { NewsIcon } from "shared/components/Svgs";
import { Settings } from "features/settings/screens";
import { GearIcon } from "shared/components/Svgs/GearIcon";
import { NewsStackScreens } from "features/news";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = ({ light, dark }: TThemedProps) => {
  const iconBackgroundColor = useThemed({ light, dark }, "secondaryBackGround");
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      paddingVertical: 30,
      backgroundColor: iconBackgroundColor,
    },
    tabBarActiveTintColor: iconBackgroundColor,
  };

  
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name={EBottomTabsRoutes.news}
        component={NewsStackScreens}
        options={{
          tabBarIcon: ({ focused }) => {
            return <NewsIcon isFocused={focused} />;
          },
        }}
      />
      <BottomTab.Screen
        name={EBottomTabsRoutes.settings}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return <GearIcon isFocused={focused} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
