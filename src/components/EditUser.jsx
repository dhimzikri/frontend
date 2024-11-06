import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [trx_type, setTrx_type] = useState("fx");
  const [BBGfitID, setBBGfitID] = useState("");
  const [mech_trx, setMechT] = useState("DirectSOA");
  const [issues, setIssues] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setDate(response.data.date);
    setTrx_type(response.data.trx_type);
    setBBGfitID(response.data.BBGfitID);
    setMechT(response.data.mech_trx);
    setIssues(response.data.issues);
    setNote(response.data.note);
    setStatus(response.data.status);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        date,
        trx_type,
        BBGfitID,
        mech_trx,
        issues,
        note,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 w-screen">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={updateUser}>
          <div>
            <h2 className="font-semibold text-xl text-white">Transaksi Form</h2>
            <p className="text-white mb-2">Untuk me-record Trade Capture</p>

            <div className="bg-sky-950 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 items-center justify-center">
                <div className="text-white">
                  <p className="font-medium text-lg">Detail Transaksi</p>
                  <p>Silahkan isi kolom terkait informasi Transaksi.</p>
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
                      <label for="full_name">Name</label>
                      <input
                        type="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label for="date">Date</label>
                      <input
                        type="date"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="address">Type Transaksi</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={trx_type}
                          onChange={(e) => setTrx_type(e.target.value)}
                        >
                          <option value="FX">FX</option>
                          <option value="FXMON">FXMON</option>
                          <option value="MMIDR">MMIDR</option>
                          <option value="FIDR-LIAB">FIDR-LIAB</option>
                          <option value="FIDR-ASSETS">FIDR-ASSETS</option>
                          <option value="LIQUIDITY">LIQUIDITY</option>
                          <option value="GOLD">GOLD</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-3">
                      <label for="bbgId">Bloomberg ID</label>
                      <input
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        value={BBGfitID}
                        onChange={(e) => setBBGfitID(e.target.value)}
                        placeholder="Bloomberg-ID"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="country">Mekanisme Transaksi</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={mech_trx}
                          onChange={(e) => setMechT(e.target.value)}
                        >
                          <option value="DirectSOA">Direct SOA</option>
                          <option value="OMS">OMS</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-5 resize rounded-md">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Detail Peyebab Issue
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={issues}
                        onChange={(e) => setIssues(e.target.value)}
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-3">
                      <label for="Notes">Notes</label>
                      <input
                        type="Note"
                        name="Note"
                        id="Note"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Notes"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label for="country">Status</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="Masuk">Masuk</option>
                          <option value="Tidak Masuk">Tidak Masuk</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end relative justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
                        <button
                          type="submit"
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>

          {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
        </a> */}
        </form>
      </div>
    </div>
  );
};

export default EditUser;
