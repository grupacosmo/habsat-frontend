import axios from "axios";

const loginUser = async (obj:unknown) => {
  axios.post("http://localhost:8080/user", obj);
};

export default loginUser;
