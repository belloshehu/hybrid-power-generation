import React from 'react'
import { FaClock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { 
    getNextConsumptionWindow, 
    getPreviousConsumptionWindow, 
    updateLoadsConsumption
} from '../../features/load/loadSlice'

const ConsumptionWindowControl = () => {
    const dispatch = useDispatch()
    const {consumptionWindow} = useSelector(store => store.load)

    const handleNextClick = () => {
        dispatch(getNextConsumptionWindow())
        dispatch(updateLoadsConsumption())
    }

    const handlePreviousClick = () => {
        dispatch(getPreviousConsumptionWindow())
        dispatch(updateLoadsConsumption())

    }

  return (
    <section className='bg-slate-300 text-black pb-2 my-2 flex flex-col gap-4 items-center rounded-md justify-center w-full'>
        <h3 className='font-bold bg-slate-100 w-full text-center rounded-t-md'>Consumption window control</h3>
        <div className='flex gap-3 items-center'>
            <FaClock className='text-xl text-primary'/>
            <p>{consumptionWindow.time.from} - {consumptionWindow.time.to}</p>
        </div>
        <div className='flex justify-between items-center w-full gap-2 p-2'>
            <button 
                className='p-2 rounded-full bg-primary text-slate-200 flex-1'
                onClick={handlePreviousClick}
            >
                Previous
            </button>
            <button 
                className='p-2  rounded-full bg-primary text-slate-200 flex-1'
                onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    </section>
  )
}

export default ConsumptionWindowControl