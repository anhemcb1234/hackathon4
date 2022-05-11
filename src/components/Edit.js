import React, { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { todoServices } from "../services/todoServices"


const Edit = () => {
  let navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [message, setMessage] = useState("");
  const [nid, setNid] = useState("");
  const [id, setId] = useState("");
  const editNote = async () => {
     try{
      console.log(message)
      await todoServices.EditNote(id, nid,{
        note_des: message
      })
      setMessage("")
      navigate("/add")
     } catch (e) {
       console.log(e)
     }
  };
  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("idUser")));
    setNid(searchParam.get('nid'));
    setMessage((searchParam.get('content')))
  }, [])
  return (
    <div className="container mx-auto">
      <button className="px-3 float-right mt-5 py-2 text-sm text-blue-100 bg-blue-600 rounded">
        <Link to={"/add"}>Trở về trang thêm công việc</Link>
      </button>
      <h1 className="text-center font-bold my-10 uppercase">Sửa</h1>
      <div className="flex justify-center">
        <textarea
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
          name="comment"
          placeholder=""
        ></textarea>
      </div>
      <button
        onClick={editNote}
        className="px-3 mt-5 py-2 text-sm text-blue-100 bg-blue-600 rounded"
      >
        Sửa
      </button>
    </div>
  );
};

export default Edit;
