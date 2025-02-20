import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setError("Kullanıcı adı ve şifre girilmelidir!");
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://wissenrentacarapi.runasp.net/api/Admin/login', {
                username,
                password
            });
            const token = response.data;
            localStorage.setItem('jwtToken', token);

            navigate("/admindashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Hatalı Kullanıcı Adı veya Şifre!");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4">
            <div className="w-full max-w-sm border-2 border-black p-6 bg-white rounded-lg shadow-md mt-8 sm:mt-4">
                <h1 className="font-bold text-center text-2xl mt-2">Admin Giriş</h1>

                <div className="flex items-center mt-8">
                    <AccountCircleOutlinedIcon fontSize="large" className="text-gray-700" />
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-gray-200 text-black border-2 border-black w-full p-2 ml-4 rounded-sm focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="flex items-center mt-4">
                    <LockOpenIcon fontSize="large" className="text-gray-700" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-gray-200 text-black border-2 border-black w-full p-2 ml-4 rounded-sm focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                {error && <p className="text-red-600 mt-2 text-center">{error}</p>}

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className={`h-10 w-full mt-6 text-lg ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-900"
                        } duration-300 text-white rounded-md`}
                >
                    {loading ? "Giriş Yapılıyor..." : "Giriş"}
                </button>
            </div>
        </div>
    );
}

export default AdminLogin;
