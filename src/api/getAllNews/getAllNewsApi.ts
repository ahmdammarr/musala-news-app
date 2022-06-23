import axios from "axios";
import { to } from "await-to-js";
import { getCurrentLanguage } from "localization";
import {API_TOKEN} from '@env'

export const getAllNewsApi = async () => {
  const selectedLang = getCurrentLanguage()
  const params = {
    'apiKey': API_TOKEN,
    'q':'all',
    'language': selectedLang,
};
  const [error, response] = await to(
    axios.get("https://newsapi.org/v2/everything",{params})
  );
  return { error, news:response?.data };
};
