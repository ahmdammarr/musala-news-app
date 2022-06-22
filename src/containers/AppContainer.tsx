import { RootStackNavigator } from "navigation";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useCashedResources } from "shared/hooks";

export const AppContainer = () => {
  const { isLoading } = useCashedResources();

  if (isLoading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
