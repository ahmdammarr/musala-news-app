import axios from "axios";
import { to } from "await-to-js";
import { getCurrentLanguage } from "localization";
import { API_TOKEN } from "@env";
import { baseURI } from "api/baseURI";
import { ELanguages } from "shared/enums";

export const getNewsApi = async (offset: number) => {
  const selectedLang = getCurrentLanguage();
  const country = selectedLang === ELanguages.ar ? "eg" : "us";
  const params = {
    access_key: API_TOKEN,
    countries: country,
    language: selectedLang,
    offset,
  };
  const [error, response] = await to(axios.get(baseURI, { params }));
  return { error, news: response?.data?.data };
};

export const getSearchNewsApi = async (offset: number, keyword?: string) => {
  const selectedLang = getCurrentLanguage();
  const country = selectedLang === ELanguages.ar ? "eg" : "us";
  const params = {
    access_key: API_TOKEN,
    countries: country,
    language: selectedLang,
    offset,
    keywords: keyword || "",
  };
  const [error, response] = await to(axios.get(baseURI, { params }));
  return { error, searchNews: response?.data?.data };
};
