import axios from "axios";

loginUser = async (obj) => {
  axios.post("http://localhost:8080/user", obj);
};

export default loginUser;
