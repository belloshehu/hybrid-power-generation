import React from 'react'
import { FaMapMarked, FaMapMarker } from 'react-icons/fa'
import { FiMap, FiMapPin } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Location = () => {
    const {city_name, state_code, country_code} = useSelector(store => store.location)
    return (
        <div className='p-2 flex gap-1 items-center text-black bg-slate-400 w-full rounded-md'>
            <FiMapPin className='text-white text-xl'/>
            {
                city_name === ''? (
                    <p>No location information</p>
                    ):(
                    <>
                        <p>{city_name},</p>
                        <p>{state_code},</p>
                        <p>{country_code}</p>
                    </>
                )
            }
        </div>
    )
}

export default Location