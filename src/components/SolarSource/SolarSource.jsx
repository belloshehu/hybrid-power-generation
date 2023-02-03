import React, {useEffect} from 'react'
import { calculatePower, start, stop } from '../../features/solarSource/solarSourceSlice'
import { useSelector, useDispatch } from 'react-redux'
import { TbSettings } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'

const SolarSource = () => {
    const dispatch = useDispatch()
    const {
        powerGenerated, 
        irradiance, 
        isRunning, 
        panelNumber
    } = useSelector(store => store.solarSource)

    useEffect(() => {
        dispatch(calculatePower())
    }, [])
        
    return (
        <article 
            className='bg-white p-5 rounded-md shadow-md shadow-slate-500 text-black hover:scale-105 slow-transition'
        >
            <div 
                className='flex justify-between items-center'
            >
                <h3 className='text-subtitle text-primary'>Solar source</h3>
                <TbSettings className={`text-3xl ${isRunning? 'animate-spin': ''}`}/>
            </div>
            <div 
                className='text-center bg-slate-200 flex justify-center gap-2'
            >
                <h4>{powerGenerated} MW</h4>
                <FiEdit 
                    className='text-primary font-extrabold text-3xl hover:bg-slate-400 rounded-full p-1'
                />
            </div>
            <div className='grid grid-cols-2 bg-slate-200 gap-2 p-1 text-center text-primary'>
                <div className='p-1 bg-slate-400'>
                    {irradiance} KWh/m<sup>2</sup>
                </div>
                <div className='p-1 bg-slate-400'>
                    {panelNumber} pannels
                </div>
            </div>
            {
                isRunning? (
                    <button 
                        className='bg-primary p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={()=>dispatch(stop())}
                    >
                        stop
                    </button>

                ):(

                    <button 
                        className='bg-primary p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={()=>dispatch(start())}
                    >
                        start
                    </button>
                )
            }
        </article>
    )
}

export default SolarSource