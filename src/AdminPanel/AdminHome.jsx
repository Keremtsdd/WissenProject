import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminCarRemove from "./AdminCarRemove";
import AdminCarUpdate from "./AdminCarUpdate";
import AdminUsers from "./AdminUsers";
import AdminSettings from "./AdminSettings";
import AdminCarAdd from "./AdminCarAdd";

function AdminHome() {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-blue-700 text-white p-4">
                <h2 className="text-xl mb-6 flex justify-center">Admin</h2>
                <div className="h-0.5 border-2 border-t-gray-400 shadow-lg"></div>
                <ul>
                    <li className="mb-4">
                        <Link to={"/admindashboard"}>
                            <button className="w-full text-left p-3 mt-5 hover:bg-blue-800 rounded border-2 border-blue-500">Gösterge Paneli</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to={"/admincaradd"}>
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Araç Ekle</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to={"/admincarremove"}>
                            <button className="w-full text-left p-3  hover:bg-blue-800 rounded border-2 border-blue-500">Araç Sil</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to={"/admincarupdate"}>
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Araç Güncellemeleri</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to={"/adminusers"}>
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Kullanıcılar</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to={"/adminsettings"}>
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Ayarlar</button>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1 bg-gray-100 p-6">
                <Routes>
                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path="/admincaradd" element={<AdminCarAdd />} />
                    <Route path="/admincarremove" element={<AdminCarRemove />} />
                    <Route path="/admincarupdate" element={<AdminCarUpdate />} />
                    <Route path="/adminusers" element={<AdminUsers />} />
                    <Route path="/adminsettings" element={<AdminSettings />} />
                </Routes>
            </div>
        </div>
    )
}

export default AdminHome;
