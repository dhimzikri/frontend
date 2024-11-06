import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserTrdList = () => {
  const [usersTrade, setUserTrade] = useState([]);

  useEffect(() => {
    getUserTrader();
  }, []);

  const getUserTrader = async () => {
    const response = await axios.get("http://localhost:5000/users_trd");
    setUserTrade(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users_trd/${id}`);
      getUserTrader();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-gray-500 dark:text-white">
        <thead class="text-xs text-red-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center text-white bg-slate-700">
            <th className="px-4 py-2">No</th>
            <th scope="col" className="px-4 py-3">
              User Name
            </th>
            <th scope="col" className="px-4 py-3">
              Full Name
            </th>
            <th scope="col" className="px-4 py-3">
              Satker
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {usersTrade.map((usersTrade, index) => (
            <tr
              key={usersTrade._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th>{index + 1}</th>
              <td className="px-6 py-4 font-semibold">
                {usersTrade.user_name}
              </td>
              <td className="px-6 py-4">{usersTrade.full_name}</td>
              <td className="px-6 py-4">{usersTrade.sat_ker}</td>
              <td className="px-6 py-4">{usersTrade.description}</td>
              <td className="flex justify-center gap-2 m-2 items-center">
                <button>
                  <Link
                    to={`/edit_trd/${usersTrade._id}`}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit
                    </span>
                  </Link>
                </button>
                <button
                  onClick={() => deleteUser(usersTrade._id)}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span class="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTrdList;
