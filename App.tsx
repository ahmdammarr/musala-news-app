import React from "react";
import { ReduxContainer } from "./src/containers/ReduxContainer";
import { AppContainer } from "containers";
const App = () => {
  return (
    <ReduxContainer>
      <AppContainer />
    </ReduxContainer>
  );
};

export default App;
