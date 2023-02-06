import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    disconnectEnergyStorge,
    connectEnergyStorge,
    calculateSOD,
    calculateStoredAh,
    calculateStoredWh,
    setChargingAm,
    updateDOD,
 } from '../../features/energyStorage/energyStorageSlice'
import { FiEdit } from 'react-icons/fi'
import { FiBatteryCharging } from 'react-icons/fi'
import { FaBatteryFull } from 'react-icons/fa'

const EnergyStorage = () => {
    const {
        isConnected, 
        chargingAm,
        numberOfBatteries,
        storedAh, 
        storedWh,
        batteryAh, 
        SOD,
        DOD
    } = useSelector(store => store.energyStorage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateSOD())
        dispatch(calculateStoredAh())
        dispatch(calculateStoredWh())
        dispatch(setChargingAm())
    }, [chargingAm, SOD])


    useEffect(()=>{
        let timer = null
        timer = setInterval(()=>{
            if((SOD < 100) && isConnected === true){
                dispatch(updateDOD(chargingAm))
                dispatch(calculateSOD())
            }else{
                dispatch(disconnectEnergyStorge())
            }
            console.log(chargingAm)
        }, 1000*60 )
        return ()=>{
            clearInterval(timer)
        }
    }, [SOD, isConnected])
    
    return (
        <article 
            className='bg-white p-5 rounded-md shadow-md shadow-slate-500 text-black hover:scale-105 slow-transition'
        >
            <div 
                className='flex justify-between items-center gap-2'
            >
                <h3 className='text-subtitle text-primary flex-1'>Energy Storag</h3>
                <h4 className='text-3xl text-green-500'>{SOD.toFixed(2)}%</h4>
               {
                SOD < 100? (
                    <FiBatteryCharging 
                        className={`text-3xl text-green-600 ${isConnected? 'animate-bounce rotate-0': ''} -rotate-90 `}
                    />
                ):
                (
                    <FaBatteryFull
                        className={`text-3xl text-green-600  -rotate-90 `}
                    />
                )
               }
            </div>
            <div className='text-center bg-slate-200 flex justify-center items-center gap-2'>
                <FaBatteryFull className='-rotate-90 text-xl text-green-500'/> 
                <h4 className='text-xl text-green-500'>{(batteryAh * numberOfBatteries).toFixed(2)} Ah</h4>
                <FiEdit 
                    className='text-primary font-extrabold text-3xl hover:bg-slate-400 rounded-full p-1'
                />
            </div>
            <div 
                className='grid grid-cols-2 bg-slate-200 gap-2 p-1 text-center text-primary'
            >
                <div className='p-1 bg-slate-400'>
                    {storedAh.toFixed(2)} Ah
                </div>
                <div className='p-1 bg-slate-400'>
                    {storedWh} kwh
                </div>
            </div>
            {
                isConnected? (
                    <button 
                        className='bg-primary p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={()=>dispatch(disconnectEnergyStorge())}
                    >
                        disconnect
                    </button>

                ):(

                    <button 
                        className='bg-primary p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={()=>dispatch(connectEnergyStorge())}
                    >
                        connect
                    </button>
                )
            }
        </article>
    )
}

export default EnergyStorage