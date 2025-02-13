import React, { useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router';
import axios from 'axios';


function AdminLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const hanleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5115/api/Admin/login', {
                username: username,
                password: password
            })

            const token = response.data
            localStorage.setItem('jwtToken', token)

            navigate("/admindashboard")

        } catch (error) {
            setError("Hatalı Kullanıcı Adı veya Şifre !")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="h-96 w-96 border-2 border-black p-6">
                <div>
                    <h1 className='font-bold flex justify-center text-2xl mt-5'>Admin </h1>
                    <AccountCircleOutlinedIcon fontSize='large' />
                    <input
                        type="text"
                        placeholder="Username"
                        className=" bg-gray-200 text-black border-2 border-black w-64 p-2 mb-4 mt-10 ml-4  rounded-sm"
                        value={username}
                        onChange={(x) => setUsername(x.target.value)}
                    />
                </div>

                <div>
                    <LockOpenIcon fontSize='large' />
                    <input
                        type="password"
                        placeholder="Password"
                        className=" bg-gray-200 text-black border-2 border-black w-64 p-2 ml-4 rounded-sm"
                        value={password}
                        onChange={(x) => setPassword(x.target.value)}
                    />
                </div>

                {error && <p className='text-red-600 mt-2 ml-14'>{error}</p>}

                <button onClick={hanleLogin} className='h-9 w-32 mt-7 ml-24 text-xl bg-green-600 hover:bg-green-900 duration-300 text-white rounded-sm'>Giriş</button>
            </div>
        </div>

    )
}

export default AdminLogin