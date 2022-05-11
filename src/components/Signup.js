import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupService } from "../services/signupService";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate()
  const SignUp = async () => {
    if (!username) {
      alert("Username is required ");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    } else if (!email) {
      alert("Email is required");
    } else {
      try {
        await signupService.postUser({
            username,
            email,
            password,
        });
        alert('dang ky thanh cong')
        navigate("/")
    } catch (e) {
        console.log(e)
    }
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-2">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            id="name"
            placeholder="Name"
          />
          <span id="name-error"></span>
          <span id="fullname-error"></span>
          <span id="phone-error"></span>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span id="email-error"></span>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id="password-error"></span>
          <button
            type="submit"
            className="w-full text-center py-3 rounded hover:bg-green-dark focus:outline-none my-1"
            onClick={() => SignUp()}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to = "/signup"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
