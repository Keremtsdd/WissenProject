import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function AdminHome() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate('/adminlogin');
        }
    }, [navigate]);

    return (
        <div className="flex h-screen">
            <div className="w-64 bg-blue-700 text-white p-4">
                <h2 className="text-xl mb-6 flex justify-center">Admin</h2>
                <div className="h-0.5 border-2 border-t-gray-400 shadow-lg"></div>
                <ul>
                    <li className="mb-4">
                        <Link to="/admindashboard">
                            <button className="w-full text-left p-3 mt-5 hover:bg-blue-800 rounded border-2 border-blue-500">Gösterge Paneli</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admincaradd">
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Araç Ekle</button>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admincarremove">
                            <button className="w-full text-left p-3 hover:bg-blue-800 rounded border-2 border-blue-500">Araç Sil</button>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1 bg-gray-100 p-6">

            </div>
        </div>
    );
}

export default AdminHome;
