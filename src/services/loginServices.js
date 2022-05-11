import {Axios} from './Axios';
function login(payload){
    return Axios.post('/api/auth/signin',payload);
}
export const loginServices = {
    login
};