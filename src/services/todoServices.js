import { Axios } from "./Axios";
function addNote(payload) {
  return Axios.post("login", payload);
}
function getNote(payload) {
    return Axios.get("login", payload);
  }
export const todoServices = {
  addNote,
  getNote
};
