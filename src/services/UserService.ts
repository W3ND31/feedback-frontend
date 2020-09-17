import User from "../components/types/user.type";
import api from "./api";

const listUsers = () => {
  return api.get("/usuario");
};

const createUser = (user: User) => {
  return api.post("/usuario", user);
};

const UserService = {
  listUsers,
  createUser,
};

export default UserService;
