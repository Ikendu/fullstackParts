import axios from "axios";

const url = "http://localhost:3001/notes";

export const getAll = () => {
  return axios.get(url);
};

export const create = (newObject) => {
  return axios.post(url, newObject);
};

export const update = (id, newObject) => {
  return axios.put(`${url}/${id}`, newObject);
};
