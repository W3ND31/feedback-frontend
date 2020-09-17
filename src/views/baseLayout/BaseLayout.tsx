import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@material-ui/core";
import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons";
import React, { cloneElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../store";
import { LogoutAction } from "../../store/auth/AuthActions";
import MuiStylesApp from "../../style/MuiStylesApp";

function ElevationScroll(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const BaseLayout = (props: any) => {
  const classes = MuiStylesApp();
  const dispatch = useDispatch();
  let history = useHistory();

  const { authenticated } = useSelector((state: RootState) => state.AuthReducer);

  const [open, setOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isMenuOpen = Boolean(menuAnchor);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const handleProfileMenuOpen = (event: any) => {
    console.log(event);
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const drawerList = () => (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Cadastro de Feedback", route: "/" },
          { text: "Feedbacks", route: "/feedbacks" },
        ].map((item, index) => (
          <ListItem button key={item.text} onClick={() => history.push(item.route)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const handleLogout = () => {
    dispatch(LogoutAction());
    handleMenuClose();
  };

  const menuLogout = (
    <Menu
      anchorEl={menuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="menuLogout"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  if (authenticated) {
    return (
      <>
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className="header-title" variant="h5" noWrap>
                {"Sistema de cadastro de feedbacks"}
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sessionDesktop}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="menuLogout"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container maxWidth={false} className={classes.contentContainer}>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>
          {props.children}{" "}
        </Container>
        {menuLogout}
      </>
    );
  }

  return <>{props.children}</>;
};

export default BaseLayout;
