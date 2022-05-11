import { Axios } from "./Axios";

function postUser(payload) {
    return Axios.post("signup",payload);
}

export const signupService = {
    postUser
};