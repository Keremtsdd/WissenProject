import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AttributionIcon from '@mui/icons-material/Attribution';
import { removeFromFavorite } from '../store/slices/favoriteSlice';
import { Alert } from '@mui/material';

function Favorite() {

    const dispatch = useDispatch()
    const { favoriteArray } = useSelector(state => state.favorite);
    const [errorAlert, setErrorAlert] = useState(false)


    const handleRemoveFavorite = (carId) => {
        dispatch(removeFromFavorite(carId))
        setErrorAlert(true)

        setTimeout(() => {
            setErrorAlert(false)
        }, 3000)
    }

    if (!favoriteArray || favoriteArray.length === 0) {
        return (
            <>
                <div className='mt-80 pb-72'>
                    <p className='text text-2xl pt-6 font-serif text-center text-black'>FAVORİLEDİĞİNİZ ARAÇ BULUNMUYOR !</p>
                </div>
            </>
        )
    }

    return (
        <>
            {errorAlert && (
                <div className="fixed -top-2 left-1/2 transform -translate-x-1/2 mt-4 z-50">
                    <Alert severity="error">Favorilerden Silindi!</Alert>
                </div>
            )}

            <div className="mt-1.5 sm:mt-16 flex flex-wrap justify-center gap-10 p-8 pb-36">

                {favoriteArray.map((RentaCar) => (

                    <div key={RentaCar.carId} className='group w-96 p-5 bg-white rounded-md border-2 border-black shadow-lg '>

                        <div className='text-black font-bold text-2xl flex justify-center items-center gap-2 mb-4 -mt-3 underline select-none'>
                            <span>{RentaCar.carName}</span>
                        </div>

                        <div className='h-48 flex justify-center items-center mb-4'>
                            <img src={RentaCar.carImage} alt={RentaCar.carName} className='h-full object-contain select-none' />
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
                            <div className='flex flex-col items-center'>
                                <LocalGasStationIcon fontSize='large' />
                                <span className='text-xl font-mono select-none'>{RentaCar.carFeul}</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <AlignVerticalCenterIcon fontSize='large' />
                                <span className='text-xl font-mono select-none'>{RentaCar.carGear}</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <DriveEtaIcon fontSize='large' />
                                <span className='text-xl font-mono select-none'>{RentaCar.carAge}</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <AttributionIcon fontSize='large' />
                                <span className='font-mono text-xl select-none'>{RentaCar.carCapacity}</span>
                            </div>

                            <div className='col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-4'>
                                <button onClick={() => handleRemoveFavorite(RentaCar.carId)} className='h-8 w-full sm:w-64 bg-red-500 text-white font-bold rounded-sm mt-2 hover:bg-red-950 duration-500 select-none'>
                                    Favorilerimden Sil
                                </button>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </>
    );
}

export default Favorite;
