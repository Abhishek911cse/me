import React from "react";
import NavigationBar from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// const theme = createMuiTheme({
//   transitions: {},
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <NavigationBar />
      <Main />
    </div>
    // </ThemeProvider>
  );
}

export default App;
