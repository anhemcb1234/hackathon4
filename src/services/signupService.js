import { Axios } from "./Axios";

function postUser(payload) {
    return Axios.post("/api/auth/signup",payload);
}

export const signupService = {
    postUser
};