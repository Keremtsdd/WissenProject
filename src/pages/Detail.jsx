import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useDispatch } from 'react-redux'
import { incremant, removeFromFavorite } from '../store/slices/favoriteSlice'
import StarIcon from '@mui/icons-material/Star'
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';

function Detail() {
    const { state } = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFavorite, setIsFavorite] = useState(false)
    const [RentaCar, setRentacar] = useState({})
    const [isReservationVisible, setReservationVisible] = useState(false)
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        eposta: '',
        dogumTarihi: '',
        telefon: '',
        checkbox: false,
        aciklama: ''
    });

    const [errors, setErrors] = useState({});

    const getCarById = useCallback(async () => {
        try {
            let response = await axios.get(`http://wissenrentacarapi.runasp.net/api/RentaCar/${state.id}`)
            setRentacar(response.data)
            checkIfFavorite(response.data)
        } catch (error) {
            console.log("Get RentaCar By CarId Error", error)
        }
    }, [state])

    useEffect(() => {
        getCarById()
    }, [getCarById])


    const checkIfFavorite = (car) => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isFav = storedFavorites.some((fav) => fav.carId === car.carId)
        setIsFavorite(isFav)
    }

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(RentaCar.carId))
        } else {
            dispatch(incremant(RentaCar))
        }
        setIsFavorite(!isFavorite)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (key !== 'aciklama' && key !== 'checkbox' && !formData[key]) {
                newErrors[key] = "Bu alan zorunludur!";
            }
        })
        if (!formData.checkbox) {
            newErrors.checkbox = "Kiralama koşullarını kabul etmelisiniz!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate("/confirmation")
        }
    }

    return (
        <div className="max-w-4xl mx-auto border-t-2 border-gray-200 p-6 bg-white shadow-lg rounded-lg mt-0 mb-0 sm:mt-20 sm:mb-24">
            <div onClick={handleFavoriteToggle} style={{ cursor: 'pointer' }}>
                {isFavorite ? (
                    <StarIcon fontSize='large' style={{ color: 'black' }} />
                ) : (
                    <StarBorderIcon fontSize='large' />
                )}
            </div>

            <div className='flex justify-center'>
                <h1 className='text-4xl font-semibold text-black'>{RentaCar.carName}</h1>
            </div>

            <div className='mt-6 flex justify-center'>
                <img
                    className='h-48 sm:h-72 object-cover rounded-lg shadow-lg'
                    src={RentaCar.carImage}
                    alt={RentaCar.carName}
                />
            </div>

            <div className='mt-6 space-y-4'>
                <div className='flex justify-between items-center'>
                    <span className='font-medium text-lg text-gray-700'>Alış ve Dönüş Yeri</span>
                    <h2 className='text-xl text-gray-900'>İstanbul/Merkez Ofisi</h2>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-medium text-lg text-gray-700'>Araç Modeli</span>
                    <h2 className='text-xl text-gray-900'>{RentaCar.carAge} Model</h2>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-medium text-lg text-gray-700'>Kiralama Süresi</span>
                    <h2 className='text-xl text-gray-900'>En az 1 gün</h2>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-medium text-lg text-gray-700'>Günlük Ücret</span>
                    <h2 className='text-xl text-gray-900'>{RentaCar.carPrice} TRY</h2>
                </div>
            </div>

            <div className='mt-6 text-center mb-10'>
                <button onClick={() => setReservationVisible(!isReservationVisible)} className='px-4 py-2 text-white bg-green-700 font-bold hover:bg-green-950 rounded-lg transition-all duration-500 select-none'>
                    Rezervasyon Yap
                </button>
            </div>

            <form onSubmit={handleSubmit} className='select-none'>
                {isReservationVisible && (
                    <div className="mb-20 border-t-2 border-gray-300 pt-10">
                        <h1 className='font-bold text-3xl ml-4 mt-5 flex items-center'>
                            <ContactEmergencyOutlinedIcon fontSize='large' className='mr-3' /> Sürücü Bilgileri
                        </h1>
                        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-10 ml-4 sm:ml-20">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Ad</label>
                                <input
                                    type="text"
                                    name="ad"
                                    value={formData.ad}
                                    onChange={handleChange}
                                    placeholder=' Adınızı giriniz'
                                    className="h-10 w-full sm:w-80 mb-3 mr-7 border-2 border-black rounded-sm"
                                    required
                                />
                                {errors.ad && <p className="text-red-500">{errors.ad}</p>}
                            </div>

                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Soyad</label>
                                <input
                                    type="text"
                                    name="soyad"
                                    value={formData.soyad}
                                    onChange={handleChange}
                                    placeholder=' Soyadınızı giriniz'
                                    className="h-10 w-full sm:w-80 border-2 border-black rounded-sm"
                                    required
                                />
                                {errors.soyad && <p className="text-red-500">{errors.soyad}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 ml-4 sm:ml-20">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="eposta"
                                    value={formData.eposta}
                                    onChange={handleChange}
                                    placeholder=' info@example.com'
                                    className="h-10 w-full sm:w-80 mb-3 mr-7 border-2 border-black rounded-sm"
                                    required
                                />
                                {errors.eposta && <p className="text-red-500">{errors.eposta}</p>}
                            </div>

                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Doğum Tarihi</label>
                                <input
                                    type="date"
                                    name="dogumTarihi"
                                    value={formData.dogumTarihi}
                                    onChange={handleChange}
                                    className="h-10 w-full sm:w-80 mb-3 border-2 border-black rounded-sm"
                                    required
                                />
                                {errors.dogumTarihi && <p className="text-red-500">{errors.dogumTarihi}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 ml-4 sm:ml-20">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Telefon</label>
                                <input
                                    type="text"
                                    name="telefon"
                                    value={formData.telefon}
                                    onChange={handleChange}
                                    placeholder=" Örnek: +90 544 123 01 02"
                                    className="h-10 w-full sm:w-80 mb-3 mr-7 border-2 border-black rounded-sm"
                                    required
                                    minLength={10}
                                    maxLength={11}
                                    pattern="^\+?[0-9]{10,11}$"
                                />
                            </div>

                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-semibold">Açıklama</label>
                                <input
                                    type="text"
                                    placeholder=' İsteğe bağlı'
                                    className="h-10 w-full sm:w-80 mb-3 border-2 border-black rounded-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center ml-1 sm:ml-20 mt-4">
                            <label className="flex items-center gap-x-2">
                                <input
                                    className="w-4 h-4"
                                    type="checkbox"
                                    name="checkbox"
                                    checked={formData.checkbox}
                                    onChange={handleChange}
                                />
                                <h1
                                    onClick={() => navigate('/rentalcondition')}
                                    className="flex underline font-bold cursor-pointer whitespace-nowrap"
                                >
                                    Kiralama Koşullarını <span className="font-normal ml-1">Okudum ve Kabul Ediyorum.</span>
                                </h1>
                            </label>
                            {errors.checkbox && <p className="text-red-500 mt-1">{errors.checkbox}</p>}
                        </div>




                        <div className='mt-16 text-center'>
                            <input
                                type="submit"
                                value="Rezervasyonu Tamamla"
                                className='h-10 w-52 border-2 border-black rounded-lg font-semibold bg-white cursor-pointer hover:bg-black hover:text-white duration-500'
                            />
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Detail;