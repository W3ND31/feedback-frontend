import { Snackbar, SnackbarActionTypes, SNACKBAR_CLOSE, SNACKBAR_OPEN } from "./types";

export const SnackbarOpen = (snackbar: Snackbar): SnackbarActionTypes => {
  return {
    type: SNACKBAR_OPEN,
    payload: {
      snackbar: snackbar,
      open: true,
    },
  };
};

export const SnackbarClose = (): SnackbarActionTypes => {
  return {
    type: SNACKBAR_CLOSE,
    payload: {
      snackbar: {
        severity: undefined,
        message: "",
      },
      open: false,
    },
  };
};
