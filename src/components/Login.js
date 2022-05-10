import React, { useState } from "react";
import { loginServices } from "../services/loginServices";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const Login = async() => {
        if(!username) {
            alert ('Username is required ')
            return
        }else if(!password) {
            alert ('Password is required')
            return
        } else {
            try {
                const resp = await loginServices.login({
                  username: this.username,
                  password: this.password
                })
                const data = resp.data;
                localStorage.setItem("token", data.token);
                alert('Đăng nhập thành công');
                window.location.href = '/';
              } catch (e) {
                console.log(e)
                alert('username chưa được đăng ký hoặc mật khẩu không đúng')
              }
        }
    }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick = {()=> Login()}
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
