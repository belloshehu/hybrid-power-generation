import React, {useEffect} from 'react'
import { GiBulb, GiGears } from 'react-icons/gi'
import { TbSettings } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { 
    start, 
    stop, 
    calculateFlowVolume, 
    calculatePower 
} from '../../features/hydroSource/hydroSourceSlice'


const HydroSource = () => {
    const {powerGenerated, head, flowVolume, isRunning} = useSelector(store => store.hydroSource)
    const dispatch = useDispatch()


    useEffect(() => {
     dispatch(calculateFlowVolume())
     dispatch(calculatePower())
    }, [])
    
    return (
        <article className='bg-white p-5 rounded-md shadow-md'>
            <div className='flex justify-between items-center '>
                <h3 className='text-subtitle text-primary'>Hydro source</h3>
                <TbSettings className={`text-3xl ${isRunning? 'animate-spin': ''}`}/>
            </div>
            <div className='text-center bg-slate-200'>
                <h4>{powerGenerated} MW</h4>
            </div>
            <div className='grid grid-cols-2 bg-slate-200 gap-2 p-1 text-center text-primary'>
                <div className='p-1 bg-slate-400'>
                    {head}m head
                </div>
                <div className='p-1 bg-slate-400'>
                    {flowVolume}m<sup>3</sup>/s flow volume
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

export default HydroSource