import axios from "axios";

const allCountries = "https://studies.cs.helsinki.fi/restcountries/api/all";
const countryName = "https://studies.cs.helsinki.fi/restcountries/api/name/";

export const getAll = async () => {
  const response = await axios.get(allCountries);
  return response.data;
};

export const getByName = async (name) => {
  const response = await axios.get(countryName + name);
  return response.data;
};
