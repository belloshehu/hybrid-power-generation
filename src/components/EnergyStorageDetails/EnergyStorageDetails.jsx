import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import './EnergyStorageDetails.css'

const EnergyStorageDetails = () => {
    const {
        totalCapacity,
        storedAh,
        storedWh,
        numberOfBatteries,
        SOD,
        batteryAh,
        chargingAm,
        batteryVoltage, 
        isConnected,
    } = useSelector(store => store.energyStorage)
  return (
    <div className='bg-slate-100 text-slate-800 rounded-md p-5'>
        <h3 className='text-xl font-bold text-left border-b-2 mb-5'>Details</h3>
        <ul className='flex flex-col gap-2'>
            <li className='list-item'>Total capacity : {(batteryAh * numberOfBatteries).toFixed(2)}Ah</li>
            <li className='list-item'>Stored Ah: {storedAh.toFixed(2)}Ah</li>
            <li className='list-item'>Stored wh: {storedWh.toFixed(2)}wh</li>
            <li className='list-item'>Number of batteries: {numberOfBatteries}</li>
            <li className='list-item'>Charge : {SOD.toFixed(2)}%</li>
            <li className='list-item'>Charging rate : {chargingAm.toFixed(2)}% per minute </li>
            <li className='list-item'>Battery Ah: {batteryAh}Ah</li>
            <li className='list-item'>Battery voltage: {batteryVoltage}v</li>
            <li className='list-item'>Status: {
                isConnected? 
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

export default EnergyStorageDetails