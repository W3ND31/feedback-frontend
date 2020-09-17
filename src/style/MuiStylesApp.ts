import { makeStyles } from "@material-ui/core";

const MuiStylesApp = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  contentContainer: {
    marginTop: theme.spacing(2),
  },
  gridTitle: {
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%",
  },
  containerForm: {
    alignContent: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  arrowBackContainer: {
    alignItems: "center",
  },
  drawerList: {
    width: 250,
  },
  grow: {
    flexGrow: 1,
  },
  sessionDesktop: {
    display: "flex",
  },
}));

export default MuiStylesApp;
