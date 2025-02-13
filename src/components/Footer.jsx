import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from 'react-router';

function Footer() {

    const navigate = useNavigate()

    return (

        <footer className="bg-gray-800 text-white font-medium py-6">

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="space-y-2 text-neutral-300">
                    <p className="flex items-center justify-center md:justify-start gap-2 pb-1">
                        <LocationOnIcon fontSize="large" /> İstanbul / Turkey
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2 pb-1">
                        <LocalPhoneIcon fontSize="large" /> +90 544 123 01 02
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                        <EmailIcon fontSize="large" /> RentaCar@gmail.com
                    </p>
                </div>

                <div className="w-fit mx-auto md:mx-0 text-neutral-300">
                    <h1 className="font-bold text-lg mb-2">HAKKIMIZDA</h1>
                    <p onClick={() => navigate("/")} className="hover:text-yellow-800 cursor-pointer pb-1 select-none gap-2">Ana Sayfa</p>
                    <p onClick={() => navigate("/about")} className="hover:text-yellow-800 cursor-pointer pb-1 select-none">Hakkımızda</p>
                    <p onClick={() => navigate("/rentalcondition")} className="hover:text-yellow-800 cursor-pointer select-none">Kiralama Koşulları</p>
                </div>

                <div className="md:text-right text-neutral-300">
                    <h1 className="font-bold text-lg mb-2">Çalışma Saatleri (Merkez Ofis)</h1>
                    <p>H.içi: 08:00 - 21:00</p>
                    <p>H.sonu: 08:00 - 19:00</p>
                </div>

            </div>

            <div className="bg-gray-700 py-3 mt-6 text-center">
                <p>&copy; 2025 Tüm Hakları Saklıdır.</p>
            </div>

        </footer>
    )
}

export default Footer