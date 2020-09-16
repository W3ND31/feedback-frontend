import { createMuiTheme } from "@material-ui/core/styles";

const MuiThemeApp = createMuiTheme({
  palette: {
    primary: {
      main: "#006FAB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#006FAB",
      contrastText: "#D7D4D2",
    },
  },
  spacing: (factor) => `${0.585651537 * factor}vw`,
  overrides: {
    MuiContainer: {
      root: {
        height: "100%",
      },
    },
  },
});

export default MuiThemeApp;
