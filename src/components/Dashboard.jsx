import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
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
            <th scope="col" className="px-4 py-2">
              Trader Name
            </th>
            <th scope="col" className="px-4 py-2">
              Date
            </th>
            <th scope="col" className="px-4 py-2">
              Type
            </th>
            <th scope="col" className="px-4 py-2">
              Bloomberg-ID
            </th>
            <th scope="col" className="px-4 py-2">
              Mekanisme Transaksi
            </th>
            <th scope="col" className="px-4 py-2">
              Issues
            </th>
            <th scope="col" className="px-4 py-2">
              Note
            </th>
            <th scope="col" className="px-4 py-2">
              Status
            </th>
            <th scope="col" className="px-4 py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th className="">{index + 1}</th>
              <td className="px-6 py-4 font-semibold ">{user.name}</td>
              <td className="px-6 py-4">{user.date}</td>
              <td className="px-6 py-4">{user.trx_type}</td>
              <td className="px-6 py-4">{user.BBGfitID}</td>
              <td className="px-6 py-4">{user.mech_trx}</td>
              <td className="px-6 py-4 text-justify" title={user.issues}>
                {`${user.issues.substring(0, 12)}`}
              </td>
              <td className="px-6 py-4">{user.note}</td>
              <td className="px-6 py-4">{user.status}</td>
              <td className="flex justify-center gap-2 m-2 items-center">
                <button>
                  <Link
                    to={`edit/${user._id}`}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit
                    </span>
                  </Link>
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
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
export default Dashboard;
