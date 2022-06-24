import axios from "axios";
import { to } from "await-to-js";
import { getCurrentLanguage } from "localization";
import {API_TOKEN} from '@env'
import { baseURI } from "api/baseURI";
import { ELanguages } from "shared/enums";


export const getAllNewsApi = async (offset:number) => {
  const selectedLang = getCurrentLanguage()
  const country = selectedLang === ELanguages.ar?'eg':'us'
  const params = {
    'access_key': API_TOKEN,
    'countries':country,
    'language': selectedLang,
    "offset":offset
};
  const [error, response] = await to(
    axios.get(baseURI,{params})
  );
  return { error, news:response?.data?.data };
};
