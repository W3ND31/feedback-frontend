import api from "./api";

const listUsers = () => {
  api.get("/usuarios");
};

const UserService = {
  listUsers,
};

export default UserService;
