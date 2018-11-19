import React, { Component } from "react";
import { AppContextProvider } from "contexts/app";
import Application from "./application";

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Application />
      </AppContextProvider>
    );
  }
}

export default App;
