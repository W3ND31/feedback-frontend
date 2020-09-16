import { Login } from "../store/auth/types";
import api from "./api";

const loginUser = (login: Login) => {
  return api.post("/usuario/login", login);
};

const AuthService = {
  loginUser,
};

export default AuthService;
