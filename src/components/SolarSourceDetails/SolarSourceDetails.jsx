import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import './SolarSourceDetails.css'

const SolarSourceDetails = () => {
    const {
        panelNumber,
        powerGenerated,
        isRunning,
        irradiance, 
        panelWattage,
        batteryCapacity,
        batteryNumber,
    } = useSelector(store => store.solarSource)
  return (
    <div className='bg-slate-100 text-slate-800 rounded-md p-5'>
        <h3 className='text-xl font-bold text-left border-b-2 mb-5'>Details</h3>
        <ul className='flex flex-col gap-2'>
            <li className='list-item'>Generated(estimated) power: {powerGenerated}MW</li>
            <li className='list-item'>Solar panels: {panelNumber}</li>
            <li className='list-item'>Irradiance: {irradiance} kwhm<sup>-2</sup></li>
            <li className='list-item'>Pannel wattage: {panelWattage} w</li>
            {/* <li className='list-item'>Battery capacity: {batteryCapacity} Ah</li>
            <li className='list-item'>Number of Batteries: {batteryNumber}</li> */}
            <li className='list-item'>Status: {
                isRunning? 
                    <>
                        <span>running</span> 
                        <FiSettings className='animate-spin inline mx-2'/> 
                    </>
                    : 
                    'stopped'
                }
            </li>
        </ul>
    </div>
  )
}

export default SolarSourceDetails