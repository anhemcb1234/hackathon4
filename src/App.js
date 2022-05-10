<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./components/ToDo";
import Edit from "./components/Edit";
=======
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
>>>>>>> 6b1e22eeee1a65dcc25f1c2244af616ae5fe1650
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/signin" element={<Signin />} /> */}
          <Route path="/add" element={<ToDo />} />
          <Route path="/edit" element={<Edit />} />
=======
          <Route path="/" element={<About />} />
          <Route path='/login' element = {<Login/>} />
        

>>>>>>> 6b1e22eeee1a65dcc25f1c2244af616ae5fe1650
        </Routes>
      </BrowserRouter>
    </>
  );
}
