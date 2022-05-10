import {Axios} from './Axios';
function login(payload){
    return Axios.post('/api/auth/singin',payload);
}
export const loginServices = {
    login
};