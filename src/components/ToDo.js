import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { todoServices } from "../services/todoServices";

export default function ToDo() {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [notefilter, setNotefilter] = useState([]);
  const [id, setId] = useState(0);

  const _logOut = () => {
    navigate("/");
  };
  const deleteNote = async (uid, id) => {
    await todoServices.DepleteNote(uid, id);
    await getNote()
  };
  const addNote = async () => {
    try {
      await todoServices.addNote(
        {
          note_des: message,
          remind: new Date(),
        },
        JSON.parse(localStorage.getItem("idUser"))
      );
      setMessage("");
      await getNote()
    } catch (e) {
      console.log(e);
    }
  };
  const getNote = async () => {
    try {
      const resp = await todoServices.getNote(id);
      console.log("data", resp);
      setFilter(resp.data)
    } catch (e) {
      console.log(e);
    }
  };
  const handlerSearch = (e) => {
    
  } 
  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("idUser")));
    getNote();
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
              onChange={(evt) => handlerSearch(evt.target.value)}
              value={search}
              className="w-full  h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="mt-10">
          {filter?.map((item, index) => (
            <div className="flex items-center justify-between my-2" key={index}>
              <p>{item.note_des}</p>
              <div>
                <Link to={`/edit?nid=${item.id}&content=${item.note_des}`}>Sửa</Link>
                <button
                  onClick={() => deleteNote(item.uid, item.id)}
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
