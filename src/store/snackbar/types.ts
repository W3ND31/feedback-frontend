export const SNACKBAR_OPEN = "SNACKBAR_OPEN";
export const SNACKBAR_CLOSE = "SNACKBAR_CLOSE";

export interface Snackbar {
  severity: "error" | "warning" | "info" | "success" | undefined;
  message: string;
}

export interface SnackBarState {
  snackbar: Snackbar;
  open: boolean;
}

interface SnackbarOpen {
  type: typeof SNACKBAR_OPEN;
  payload: { snackbar: Snackbar; open: boolean };
}

interface SnackbarClose {
  type: typeof SNACKBAR_CLOSE;
  payload: { snackbar: Snackbar; open: boolean };
}

export type SnackbarActionTypes = SnackbarOpen | SnackbarClose;
