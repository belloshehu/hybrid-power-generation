import React, {useEffect} from 'react'
import { calculatePower, start, stop } from '../../features/solarSource/solarSourceSlice'
import { controlLoads } from '../../features/controlPanel/controlPanelSlice'
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

    const fetchData = async () =>{
        const res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${'5.95058'}&lon=${'5.681'}&appid=${'8825d3ca67709456f37a2234758c2c66'}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {console.log(err)})
    }
    useEffect(() => {
        fetchData()
        dispatch(calculatePower(4))
    }, [])
        
    const handleStopClick = () =>{
        dispatch(stop())
        dispatch(controlLoads(0))
    }

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
                <h4>{powerGenerated.toFixed(2)} MW</h4>
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
                        onClick={handleStopClick}
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