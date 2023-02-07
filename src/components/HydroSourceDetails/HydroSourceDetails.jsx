import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import './HydroSourceDetails.css'

const HydroSourceDetails = () => {
    const {
        crossSectionalArea,
        head,
        waterSpeed,
        flowVolume,
        powerGenerated,
        isRunning
    } = useSelector(store => store.hydroSource)
  return (
    <div className='bg-slate-100 text-slate-800 rounded-md p-5'>
        <h3 className='text-xl font-bold text-left border-b-2 mb-5'>Details</h3>
        <ul className='flex flex-col gap-2'>
            <li className='list-item'>Generated(estimated) power: {powerGenerated}MW</li>
            <li className='list-item'>Head: {head}m</li>
            <li className='list-item'>Water speed: {waterSpeed} ms<sup>-2</sup></li>
            <li className='list-item'>Flow volume: {flowVolume} ls<sup>-1</sup></li>
            <li className='list-item'>River Cross-sectional area: {crossSectionalArea} m<sup>2</sup></li>
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

export default HydroSourceDetails