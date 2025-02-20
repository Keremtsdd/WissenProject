import React, { useState, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import { Link } from 'react-router-dom';


function AdminDashboard() {
    const [totalCars, setTotalCars] = useState(0)
    const [manualCars, setManualCars] = useState(0);
    const [otoCars, setOtoCars] = useState(0);

    useEffect(() => {
        fetch('http://wissenrentacarapi.runasp.net/api/RentaCar')
            .then(response => response.json())
            .then(data => {
                setTotalCars(data.length);
                const manualCarsCount = data.filter(car => car.carGear === 'Manuel').length;
                const OtoCarsCount = data.filter(car => car.carGear === 'Otomatik').length;
                setManualCars(manualCarsCount);
                setOtoCars(OtoCarsCount);
            })
            .catch(error => console.log('Get Data Error', error));
    }, [])

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

                <div className="flex-1 p-6">
                    <div className="flex flex-wrap justify-start space-x-6 mt-10 ml-24">
                        <div className="h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg mb-6">
                            <h1 className="flex justify-center font-bold text-xl pt-10 text-white">
                                Güncel Araç Sayısı
                            </h1>
                            <div className="h-24 w-24 mt-6 mx-auto bg-white rounded-full">
                                <h1 className="flex justify-center text-3xl font-bold pt-7">{totalCars}</h1>
                            </div>
                        </div>
                        <div className="h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg mb-6">
                            <h1 className="flex justify-center font-bold text-xl pt-10 text-white">
                                Manuel Vites Araç Sayısı
                            </h1>
                            <div className="h-24 w-24 mt-6 mx-auto bg-white rounded-full">
                                <h1 className="flex justify-center text-3xl font-bold pt-7">{manualCars}</h1>
                            </div>
                        </div>
                        <div className="h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg mb-6">
                            <h1 className="flex justify-center font-bold text-xl pt-10 text-white">
                                Otomatik Vites Araç Sayısı
                            </h1>
                            <div className="h-24 w-24 mt-6 mx-auto bg-white rounded-full">
                                <h1 className="flex justify-center text-3xl font-bold pt-7">{otoCars}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard
