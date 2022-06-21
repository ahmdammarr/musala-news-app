
import React from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";
import Test from "shared/components/Test/Test";
import { useCashedResources } from "shared/hooks";

export const AppContainer = () => {
  const { isLoading } = useCashedResources();

  if (isLoading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return <Test />;
};
