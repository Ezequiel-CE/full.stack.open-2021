import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, updatePerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatePerson);
  return request.then((res) => res.data);
};

const noteFunctions = {
  getAll,
  create,
  remove,
  update,
};

export default noteFunctions;
