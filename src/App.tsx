import MomentUtils from "@date-io/moment";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import "moment/locale/pt-br";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import MuiThemeApp from "./style/MuiThemeApp";

moment.locale("pt-br");

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiThemeApp}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale={"pt-br"}>
          <Routes />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
