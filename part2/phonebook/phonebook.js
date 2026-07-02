import axios from "axios";

const baseUrl = "http://localhost:3000/phonebook";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const create = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};
