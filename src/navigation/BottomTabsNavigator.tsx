import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";
import { EBottomTabsRoutes } from "shared/enums/EBottomTabsRoutes.enum";
import Test from "shared/components/Test/Test";
import { NewsIcon } from "shared/components/Svgs";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = ({ light, dark }: TThemedProps) => {
  const iconBackgroundColor = useThemed({ light, dark }, "secondaryBackGround");
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      paddingVertical:30,
      backgroundColor: iconBackgroundColor,
    },
    tabBarActiveTintColor: iconBackgroundColor,
  };

  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name={EBottomTabsRoutes.news}
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => {
            return <NewsIcon isFocused={focused} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
