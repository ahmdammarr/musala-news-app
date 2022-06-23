import axios from "axios";
import { to } from "await-to-js";

export const getAllNewsApi = async () => {
  const [error, response] = await to(
    axios.get("https://fakestoreapi.com/products/categories")
  );
  return { error, news:response?.data };
};
