import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarCard from '../components/CarCard'
import { useDispatch } from 'react-redux'
import { incremant } from '../store/slices/favoriteSlice'
import CarCarousel from '../components/CarCarousel'


function Home() {

    const dispatch = useDispatch()
    const [data, setData] = useState([])

    useEffect(() => {
        getDataAxios()
    }, [])

    const getDataAxios = async () => {
        try {
            let response = await axios.get("http://wissenrentacarapi.runasp.net/api/RentaCar")
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log("Get Data Error", error)
        }
    }

    const addFavorite = (RentaCar) => {
        dispatch(incremant(RentaCar))
    }

    return (
        <>
            <CarCarousel />
            <div className='h-1 ml-80 mr-80 mt-14 border-2 border-t-gray-400 shadow-lg'></div>
            <div className='flex justify-center'>
                <h1 className=' font-bold mt-5 text-2xl  h-9 w-48 text-center select-none'>Araç Filosu</h1>
            </div>
            <div className='group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-7 '>

                {
                    data.map((RentaCar) => (

                        <CarCard key={RentaCar.carId} RentaCar={RentaCar} addFavorite={addFavorite} />
                    ))
                }
            </div>
        </>
    )
}

export default Home