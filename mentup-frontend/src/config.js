const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? process.env.REACT_APP_API_URL_PROD
  : process.env.REACT_APP_API_URL;
