import React from "react";

import { ReduxContainer } from "containers";
import { AppContainer } from "containers";

const RootContainer = () => {
  return (
    <ReduxContainer>
      <AppContainer />
    </ReduxContainer>
  );
};

export default RootContainer;
