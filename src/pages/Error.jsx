import React from 'react'
import { Link } from 'react-router-dom';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export default function Error() {
    return (
        <div className="max-w-4xl mx-auto mt-52 p-6 bg-white shadow-lg rounded-lg mb-52 ">
            <div className="text-center">
                <ReportGmailerrorredIcon style={{ fontSize: 150, color: 'red' }} />
                <h1 className="text-3xl font-semibold text-gray-900 mt-4">404 - Sayfa Bulunamadı!</h1>
                <p className="text-lg text-gray-600 mt-2">Aradığınız sayfa mevcut değil , lütfen anasayfaya  geri dön</p>
            </div>

            <div className="mt-14 text-center">
                <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-900 transition-all duration-300">
                    Anasayfaya Dön
                </Link>
            </div>
        </div>
    )
}
