import { RootStackNavigator } from "navigation";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useCashedResources } from "shared/hooks";
import { Splash } from "features/splash/screens/splash";

export const AppContainer = () => {
  const { isLoading, IsSplashOn } = useCashedResources();

  if (IsSplashOn) return <Splash />;

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
