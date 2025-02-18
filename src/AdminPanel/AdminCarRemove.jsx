import { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import { Link } from 'react-router-dom';

const AdminCarRemove = () => {
    const [carId, setCarId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        if (!carId) {
            setMessage('Lütfen bir araç ID girin.');
            return;
        }

        if (window.confirm('Bu aracı silmek istediğinize emin misiniz?')) {
            try {
                const response = await fetch(`http://wissenrentacarapi.runasp.net/api/RentaCar/delete/${carId}`, {
                    method: 'DELETE',
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message);

                setMessage('Araç başarıyla silindi.');
                setCarId('');
            } catch (error) {
                setMessage(`Silme hatası: ${error.message}`);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <AdminHeader />
            <div className="flex flex-1">
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
                <div className="p-4 ml-20 mt-10">
                    <h1 className="text-2xl font-bold mb-4 "> Araç Sil</h1>
                    <input type="text" placeholder="Araç ID girin" value={carId} onChange={(e) => setCarId(e.target.value)} className="p-2  rounded mb-2 border-2 border-black" />
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-900 duration-300 transition" > Sil </button>
                    {message && <p className="mt-4 text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminCarRemove;
