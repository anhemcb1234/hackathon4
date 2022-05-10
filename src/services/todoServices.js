import { Axios } from "./Axios";
function addNote(payload) {
  return Axios.post("/note/add", payload);
}

function getNote(payload) {
  return Axios.post(`/note/find/`, payload);
}
export const todoServices = {
  addNote,
  getNote,
};
