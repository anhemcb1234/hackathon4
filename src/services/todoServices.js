import { Axios } from "./Axios";
function addNote(payload) {
  return Axios.post("login", payload);
}
export const todoServices = {
  addNote,
};
