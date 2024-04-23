import config from "../config";
import axios  from "axios";



export async function login(email, password) {
  const body = { email, password };
  const response = await axios.post(`${config.url}/user/login`, body);
  return response.data;
}

export async function register(fullName, email, password, phoneNO) {
  const body = { fullName, email, password, phoneNO};
  const response = await axios.post(`${config.url}/user/register`, body);
  return response.data; // Assuming your backend sends back a JSON response with a "status" field
}


