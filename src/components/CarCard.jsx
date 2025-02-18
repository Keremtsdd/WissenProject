import React, { useState } from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AttributionIcon from '@mui/icons-material/Attribution';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

function CarCard({ RentaCar, addFavorite }) {
    const [alertVisible, setAlertVisible] = useState(false);
    let urlName = RentaCar.carName.toLowerCase().split(" ").join("-");

    const handleAddFavorite = () => {
        addFavorite(RentaCar);
        setAlertVisible(true);

        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    return (
        <>
            {alertVisible && (
                <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-48 max-w-sm">
                    <Alert severity="success">Favorilere eklendi!</Alert>
                </div>
            )}

            <div className='group bg-white rounded-md shadow-2xl p-4 mb-6 hover:bg-neutral-100 w-full max-w-md mx-auto'>
                <h1 className='text-black font-bold text-xl md:text-2xl text-center mt-2 select-none'>{RentaCar.carName}</h1>

                <Link to={`/detail/${urlName}`} state={{ id: RentaCar.carId }} className='contents'>
                    <div className='h-32 md:h-36 w-full flex justify-center items-center mt-4 select-none'>
                        <img src={RentaCar.carImage} alt={RentaCar.carName} className="max-h-full max-w-full object-contain" />
                    </div>
                </Link>

                <div className='grid grid-cols-2 gap-4 text-sm md:text-base mt-4 select-none'>

                    <div className='flex items-center justify-center gap-1'><LocalGasStationIcon />
                        <span className="font-bold">{RentaCar.carFeul}</span>
                    </div>

                    <div className='flex items-center justify-center gap-1'><AlignVerticalCenterIcon />
                        <span className="font-bold">{RentaCar.carGear}</span>
                    </div>

                    <div className='flex items-center justify-center gap-1'><DriveEtaIcon />
                        <span className="font-bold">{RentaCar.carAge}</span>
                    </div>

                    <div className='flex items-center justify-center gap-1'><AttributionIcon />
                        <span className="font-bold">{RentaCar.carCapacity}</span>
                    </div>

                </div>

                <div className='mt-4 md:mt-6'>
                    <Link to={`/detail/${urlName}`} state={{ id: RentaCar.carId }}>
                        <button className='block bg-yellow-700 text-white font-bold rounded-sm h-10 w-full max-w-[80%] mx-auto duration-500 hover:bg-yellow-950 select-none'>
                            Detayları Gör
                        </button>
                    </Link>

                    <button
                        onClick={handleAddFavorite}
                        className='block bg-green-700 text-white font-bold rounded-sm h-10 w-full max-w-[80%] mx-auto mt-2 duration-500 hover:bg-green-950 select-none'>
                        Favorilere Ekle
                    </button>
                </div>
            </div>
        </>
    );
}

export default CarCard;

