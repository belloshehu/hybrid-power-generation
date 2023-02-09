import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { store } from '../../store'
import Location from '../Location/Location'
import './SolarSourceDetails.css'

const SolarSourceDetails = () => {
    const {
        panelNumber,
        powerGenerated,
        isRunning,
        irradiance, 
        panelWattage,
        panelYield,
        performanceRatio,
    } = useSelector(store => store.solarSource)

    const {latitude, longitude} = useSelector(store => store.location)
  return (
    <div className='bg-slate-100 text-slate-800 rounded-md p-5'>
        <h3 className='text-xl font-bold text-left border-b-2 mb-5'>Details</h3>
        <ul className='flex flex-col gap-2'>
            <li className='list-item'>Generated(estimated) power: {powerGenerated}MW</li>
            <li className='list-item'>Solar panels: {panelNumber}</li>
            <li className='list-item'>Irradiance: {irradiance}wm<sup>-2</sup></li>
            <li className='list-item'>Pannel wattage: {panelWattage}w</li>
            <li className='list-item'>Pannel Efficiency: {panelYield*100}%</li>
            <li className='list-item'>Pannel Perfomance ratio: {performanceRatio * 100}%</li>
        
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
            <li className='list-item'>Latitude: {latitude}</li>
            <li className='list-item'>Longitude: {longitude}</li>
            <Location />
        </ul>
    </div>
  )
}

export default SolarSourceDetails