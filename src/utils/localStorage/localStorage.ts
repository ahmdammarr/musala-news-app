import AsyncStorage from "@react-native-async-storage/async-storage";
import { to } from "await-to-js";

export const getItem = async (key: string) => {
  const [err, res] = await to(AsyncStorage.getItem(key));

  return { err, res };
};
export const setItem = async (key: string, value: string) => {
  const [err, res] = await to(AsyncStorage.setItem(key, value));
  return {
    err,
    res,
  };
};

export const removeItem = async (key: string) => {
  const [err, res] = await to(AsyncStorage.removeItem(key));
  return {
    err,
    res,
  };
};
