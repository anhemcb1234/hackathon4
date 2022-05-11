import { Axios } from "./Axios";

function addNote(payload, uid) {
  return Axios.post(`/note/${uid}/add`, payload);
}

function getNote(uid) {
  return Axios.get(`/note/${uid}/all`);
}

function DepleteNote(uid, nid) {
  return Axios.del(`/note/${uid}/delete/${nid}`);
}
function EditNote(uid, nid, payload) {
  return Axios.put(`/note/${uid}/edit/${nid}`,payload);
}
export const todoServices = {
  addNote,
  getNote,
  DepleteNote,
  EditNote
};
