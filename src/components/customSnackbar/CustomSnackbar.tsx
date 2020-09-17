import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SnackbarClose } from "../../store/snackbar/SnackbarActions";

const CustomSnackbar = () => {
  const { snackbar, open } = useSelector((state: RootState) => state.SnackbarReducer);

  const dispatch = useDispatch();

  const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    dispatch(SnackbarClose());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
