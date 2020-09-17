import { SnackbarActionTypes, SnackBarState, SNACKBAR_CLOSE, SNACKBAR_OPEN } from "./types";

const INITIAL_STATE: SnackBarState = {
  snackbar: { severity: "success", message: "" },
  open: false,
};

const SnackbarReducer = (state = INITIAL_STATE, action: SnackbarActionTypes): SnackBarState => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return { ...state, ...action.payload };
    case SNACKBAR_CLOSE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default SnackbarReducer;
