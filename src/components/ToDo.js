import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { todoServices } from "../services/todoServices";

export default function ToDo() {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [id, setId] = useState(() => {
    return JSON.parse(localStorage.getItem("idUser")); 
  });
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const _logOut = () => {
    setShow(false);
    navigate("/");
  };
  const deleteNote = async (uid, id) => {
    await todoServices.DepleteNote(uid, id);
  };
  const addNote = async () => {
    try {
      setShowButton(false);
      await todoServices.addNote(
        JSON.stringify({
          note_des: message,
          remind: new Date(),
        }),
        JSON.parse(localStorage.getItem("idUser"))
      );
      await getNote();
      setShowButton(true);
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  const getNote = async () => {
    try {
      setShow(false)
      const resp = await todoServices.getNote(id);
      console.log("data", resp);
      setFilter(resp.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setShow(true)
    if (filter) {
      setTimeout(() => {
        getNote();
      }, 1000);
    }
  }, []);
  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("idUser")));
  }, []);

  return (
    <>
      {show ? (
        <div class="h-screen w-screen flex items-center justify-center">
          <svg
            role="status"
            class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
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
              <label
                htmlFor="comment"
                className="text-lg text-gray-600"
              ></label>
              <textarea
                onChange={(evt) => setMessage(evt.target.value)}
                value={message}
                className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment"
                placeholder="Add your todo"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              {showButton ? (
                <button
                  onClick={addNote}
                  className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
                >
                  Thêm công việc
                </button>
              ) : (
                <button
                  disabled
                  type="button"
                  class="text-white px-3 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    role="status"
                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              )}
            </div>
            <div className="my-5 relative">
              <label
                htmlFor="comment"
                className="text-lg text-gray-600"
              ></label>
              <input
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
                className="w-full  h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment"
                placeholder="Search"
              ></input>
            </div>
          </div>
          <div className="mt-10">
            {filter
              ?.filter((x) =>
                x.note_des.toUpperCase().includes(search.toUpperCase())
              )
              ?.map((item, index) => (
                <div
                  className="flex items-center justify-between my-2"
                  key={index}
                >
                  <p>{item.note_des}</p>
                  <div>
                    <Link to={`/edit?nid=${item.id}&content=${item.note_des}`}>
                      Sửa
                    </Link>
                    {true ? (
                      <button
                        onClick={() => deleteNote(item.uid, item.id)}
                        className="px-3 ml-2 py-2 text-sm text-blue-100 bg-blue-600 rounded"
                      >
                        Xóa
                      </button>
                    ) : (
                      <button
                        disabled
                        type="button"
                        class="text-white px-3 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                      >
                        <svg
                          role="status"
                          class="inline w-4 h-4 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Loading...
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
