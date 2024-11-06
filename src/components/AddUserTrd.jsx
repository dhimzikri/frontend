import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserTrd = () => {
  const navigate = useNavigate();
  const [user_name, setUserName] = useState("");
  const [full_name, setFullName] = useState("");
  const [sat_ker, setSatker] = useState("DPD");
  const [description, setDesc] = useState("");

  const saveUserTrade = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users_trd", {
        user_name,
        full_name,
        sat_ker,
        description,
      });
      navigate("/userTrd");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 w-screen">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={saveUserTrade}>
          <div>
            <h2 className="font-semibold text-xl text-white">Trader Form</h2>
            <p className="text-white mb-2">Untuk Mendaftarkan User Trader</p>

            <div className="bg-sky-950 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 items-center justify-center">
                <div className="text-white">
                  <p className="font-medium text-lg">Detail Trader</p>
                  <p>Silahkan isi kolom terkait Trader.</p>
                  <div className="">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="w-full"
                      alt="Sample image"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 text-white">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label for="full_name">UserName</label>
                      <input
                        type="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={user_name}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label for="date">Full Name</label>
                      <input
                        type="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="address">Satker</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={sat_ker}
                          onChange={(e) => setSatker(e.target.value)}
                        >
                          <option value="DPD">DPD</option>
                          <option value="DPM">DPM</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-5 resize rounded-md">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description Trader
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={description}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end relative justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <button
                          type="submit"
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserTrd;
