import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import MuiThemeApp from "./style/MuiThemeApp";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiThemeApp}>
        <Container fixed>
          <Routes />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
