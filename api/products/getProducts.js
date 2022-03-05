import axios from "axios";

url = "http://localhost:5000";

export default getProducts = async () => {
  const response = await axios.get(`${url}/`);
  return response.data;
};
