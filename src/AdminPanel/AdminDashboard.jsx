import React, { useState, useEffect } from 'react';

function AdminDashboard() {
    const [totalCars, setTotalCars] = useState(0)
    const [manualCars, setManualCars] = useState(0);
    const [otoCars, setOtoCars] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5115/api/RentaCar')
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
        <div className="flex justify-start space-x-6 mt-10 ml-24">
            <div className='h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg '>
                <h1 className='flex justify-center font-bold text-xl pt-10 text-white'>Güncel Araç Sayısı</h1>
                <div className='h-24 w-24 mt-6 mx-auto bg-white rounded-full'>
                    <h1 className='flex justify-center text-3xl font-bold pt-7'>{totalCars}</h1>
                </div>
            </div>

            <div className='h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg  '>
                <h1 className='flex justify-center font-bold text-xl pt-10 text-white'>Manuel Vites Araç Sayısı</h1>
                <div className='h-24 w-24 mt-6 mx-auto bg-white rounded-full'>
                    <h1 className='flex justify-center text-3xl font-bold pt-7'>{manualCars}</h1>
                </div>
            </div>

            <div className='h-64 w-64 bg-blue-700 hover:bg-blue-900 rounded-lg '>
                <h1 className='flex justify-center font-bold text-xl pt-10 text-white'>Otomatik Vites Araç Sayısı</h1>
                <div className='h-24 w-24 mt-6 mx-auto bg-white rounded-full'>
                    <h1 className='flex justify-center text-3xl font-bold pt-7'>{otoCars}</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;
