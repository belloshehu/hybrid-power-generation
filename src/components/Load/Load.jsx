

import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { disconnect, connect } from '../../features/load/loadSlice'
import { calculateConnectedTotalLoad, updateLoadsConsumption } from '../../features/load/loadSlice'
import { useDispatch } from 'react-redux'


const Load = ({id, name, category, capacity,consumption, isConnected}) => {
    const dispatch = useDispatch()

    const handleDisconnect = () =>{
        dispatch(calculateConnectedTotalLoad())
        dispatch(disconnect({id}))
    }

    const handleConnect = () =>{
        dispatch(calculateConnectedTotalLoad())
        dispatch(connect({id}))
        dispatch(updateLoadsConsumption())
    }
    
    return (
        <article 
        className='bg-white p-5 rounded-md shadow-md shadow-slate-500 text-black hover:scale-105 slow-transition'
        >
            <div 
                className='flex justify-between items-center'
            >
                <h3 className='text-subtitle text-primary'>{name} load ({capacity})MW</h3>
            </div>
            <div className='text-center bg-slate-200 flex justify-center gap-2 items-center'>
                <h4>{consumption} kwh</h4>
                <FaLightbulb 
                    className={
                        `${isConnected? 'text-secondary': 'text-black'} 
                        font-extrabold text-5xl hover:bg-slate-400 rounded-full p-1`
                    }
                />
            </div>
            
            {
                isConnected? (
                    <button 
                        className='bg-slate-500 p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={handleDisconnect}
                    >
                        disconnect
                    </button>

                ):(

                    <button 
                        className='bg-slate-500 p-2 rounded-full text-secondary w-full mt-5 mx-auto'
                        onClick={handleConnect}
                    >
                        connect
                    </button>
                )
            }
        </article>
    )
}

export default Load