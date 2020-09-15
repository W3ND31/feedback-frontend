import { AppBar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";

const BaseLayout = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          //   className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
    </>
  );
};

export default BaseLayout;
