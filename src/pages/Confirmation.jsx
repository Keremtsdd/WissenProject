import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Confirmation() {
    return (
        <div className="max-w-4xl mx-auto mt-52 p-6 bg-white shadow-lg rounded-lg mb-52 ">
            <div className="text-center">
                <CheckCircleIcon style={{ fontSize: 100, color: 'green' }} />
                <h1 className="text-3xl font-semibold text-gray-900 mt-4">Rezervasyonunuz Onaylandı!</h1>
                <p className="text-lg text-gray-600 mt-2">Teşekkür ederiz, rezervasyonunuz başarıyla alındı. İlerleyen süreçte sizinle iletişime geçeceğiz.</p>
            </div>

            <div className="mt-14 text-center">
                <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-900 transition-all duration-300">
                    Anasayfaya Dön
                </Link>
            </div>
        </div>
    );
}

export default Confirmation;