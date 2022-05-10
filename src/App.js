import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./components/ToDo";
import Edit from "./components/Edit";
import Login from "./components/Login"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<ToDo />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
