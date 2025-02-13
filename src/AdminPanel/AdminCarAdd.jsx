import React, { useState } from 'react';
import axios from 'axios';

function AdminCarAdd() {
    const [carName, setCarName] = useState('');
    const [carAge, setCarAge] = useState('');
    const [carFeul, setCarFeul] = useState('');
    const [carImage, setCarImage] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carKm, setCarKm] = useState('');
    const [carGear, setCarGear] = useState('');
    const [carCapacity, setCarCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const carData = {
            CarName: carName,
            CarAge: parseInt(carAge),
            CarFeul: carFeul,
            CarImage: carImage,
            CarPrice: parseInt(carPrice),
            CarKm: parseInt(carKm),
            CarGear: carGear,
            CarCapacity: parseInt(carCapacity)
        };

        try {
            const response = await axios.post('http://localhost:5115/api/RentaCar', carData);
            console.log('Car added successfully:', response.data);
            alert('Araç başarıyla eklendi!');  // Success alert
        } catch (error) {
            console.error('Error adding car:', error);
            alert('Araç eklenirken bir hata oluştu!');  // Error alert
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Araç İsmi"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Araç Modeli (örnk:2018)"
                    value={carAge}
                    onChange={(e) => setCarAge(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Yakıt Türü"
                    value={carFeul}
                    onChange={(e) => setCarFeul(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Araç Resmi"
                    value={carImage}
                    onChange={(e) => setCarImage(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Araç Fiyatı (TRY)"
                    value={carPrice}
                    onChange={(e) => setCarPrice(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Araç Km"
                    value={carKm}
                    onChange={(e) => setCarKm(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Vites Türü"
                    value={carGear}
                    onChange={(e) => setCarGear(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                    type="text"
                    placeholder="Araç Kapasitesi"
                    value={carCapacity}
                    onChange={(e) => setCarCapacity(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-4 py-2"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
            >
                Araç Ekle
            </button>
        </form>
    );
}

export default AdminCarAdd;


