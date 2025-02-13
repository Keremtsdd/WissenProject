import React from 'react'
import { useNavigate } from 'react-router'
import LogoutIcon from '@mui/icons-material/Logout';

function AdminHeader() {
    const navigate = useNavigate()
    return (
        <header className="bg-blue-950 text-white p-4 flex justify-between items-center">
            <h1 onClick={() => navigate("/admindashboard")} className="text-lg font-semibold ml-7 cursor-pointer">Admin Paneli</h1>
            <button onClick={() => navigate("adminlogin")} className="bg-red-600 hover:bg-red-900 duration-300 px-3 py-2 rounded-sm">
                <LogoutIcon />
            </button>
        </header>
    )
}
export default AdminHeader