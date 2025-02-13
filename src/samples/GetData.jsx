import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarCard from '../components/CarCard'

function GetData() {

    const [data, setData] = useState([])

    useEffect(() => {
        getDataAxios()
    }, [])

    const getDataAxios = async () => {
        try {
            let response = await axios.get("http://localhost:5115/api/RentaCar")
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log("Get Data Error", error)
        }
    }

    return (
        <div className='group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-7 '>
            {
                data.map((RentaCar) => (

                    <CarCard RentaCar={RentaCar} />
                ))
            }
        </div>
    )
}

export default GetData  