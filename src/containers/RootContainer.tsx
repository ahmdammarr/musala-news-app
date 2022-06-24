import React from "react";

import { ReduxContainer } from "containers";
import { AppContainer } from "containers";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootContainer = () => {
  return (
    <ReduxContainer>
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    </ReduxContainer>
  );
};

export default RootContainer;
