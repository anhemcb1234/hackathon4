import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { todoServices } from "../services/todoServices";

export default function ToDo() {
  let navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [id, setId] = useState(0);

  const _logOut = () => {
    navigate("/");
  };
  const deleteNote = async (id) => {};
  const addNote = async () => {
    console.log(message);
    setMessage("");
  };
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <>
      <div className="container mt-2 mx-auto">
        <div>
          <button
            className="px-3 float-right py-2 text-sm text-blue-100 bg-red-600 rounded"
            onClick={_logOut}
          >
            Đăng xuất
          </button>
          <h1 className="text-center font-bold mt-10 uppercase">
            Thêm công việc
          </h1>
          <div className="mt-10 mb-5">
            <label htmlFor="comment" className="text-lg text-gray-600"></label>
            <textarea
              onChange={(evt) => setMessage(evt.target.value)}
              value={message}
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder="Add your todo"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={addNote}
              className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            >
              Thêm công việc
            </button>
          </div>
          <div className="my-5 relative">
            <label htmlFor="comment" className="text-lg text-gray-600"></label>
            <input
              onChange={(evt) => setSearch(evt.target.value)}
              value={search}
              className="w-full  h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder="Search"
            ></input>
            <div className="flex items-center justify-end">
              <button
                onClick={addNote}
                className="px-3 py-3 absolute top-0 bot-0 text-sm text-blue-100 bg-blue-600 rounded"
              >
                Tìm công việc
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          {filter?.map((item, index) => (
            <div className="flex items-center justify-between my-2" key={index}>
              <p>{item.message}</p>
              <div>
                <Link to={`/edit?id=${item.id}`}>Sửa</Link>
                <button
                  onClick={() => deleteNote(item.id)}
                  className="px-3 ml-2 py-2 text-sm text-blue-100 bg-blue-600 rounded"
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
