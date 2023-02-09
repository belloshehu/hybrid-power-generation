import React, {useEffect} from 'react'
import { calculatePower, start, stop, updateIrradiance } from '../../features/solarSource/solarSourceSlice'
import { controlLoads } from '../../features/controlPanel/controlPanelSlice'
import { useSelector, useDispatch } from 'react-redux'
import { TbSettings } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'
import { setLocationDetails } from '../../features/location/locationSlice'

const SolarSource = () => {
    const longitude = 6.1816
    const latitude = 6.5303
    
    const dispatch = useDispatch()
    const {
        powerGenerated, 
        irradiance, 
        isRunning, 
        panelNumber
    } = useSelector(store => store.solarSource)

    const fetchData = async () =>{
        
        try {
            fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=8486c6ef020d4d11b5852d6c7b172a35&include=hourly`)
            .then(res => res.json())
            .then((jsonData)=>{
                const data = jsonData.data[0]
                dispatch(setLocationDetails({
                    city_name: data.city_name,
                    state_code: data.state_code,
                    country_code: data.country_code
                }))
                dispatch(updateIrradiance(data.ghi))
                dispatch(calculatePower())
                console.log( data.city_name, data.state_code,data.country_code)
            })
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchData()
        dispatch(calculatePower())
    }, [])

    useEffect(()=>{
        dispatch(calculatePower())
    }, [irradiance])
        
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
                    {irradiance} W/m<sup>2</sup>
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