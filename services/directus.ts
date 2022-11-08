import axios from "axios";

export const directusAPI = axios.create({
  baseURL: "https://kwd00by5.directus.app",
});
