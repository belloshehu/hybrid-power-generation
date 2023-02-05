import React, {useEffect} from 'react'
import { FaClock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { 
    getNextConsumptionWindow, 
    getPreviousConsumptionWindow, 
    updateLoadsConsumption,
    updateConsumptionWindow 
} from '../../features/load/loadSlice'
import { setMode } from '../../features/controlPanel/controlPanelSlice'
import { formatHour } from '../../utils/utils'

let count = 0
const ConsumptionWindowControl = () => {
    const dispatch = useDispatch()
    const {mode} = useSelector(store => store.controlPanel)
    const {consumptionWindow} = useSelector(store => store.load)

    const handleNextClick = () => {
        dispatch(getNextConsumptionWindow())
        dispatch(updateLoadsConsumption())
    }

    const handlePreviousClick = () => {
        dispatch(getPreviousConsumptionWindow())
        dispatch(updateLoadsConsumption())
    }

    const handleModeChange = (modeTitle) =>{
        dispatch(setMode(modeTitle))
    }

    useEffect(() => {
        
    }, [mode])

    useEffect(() => {
        let timer = null
        if (mode === 'fast'){
            timer = setInterval(() => {
                dispatch(updateConsumptionWindow(formatHour(count)))
                dispatch(updateLoadsConsumption())

                if(count >= 23){
                    count = 0
                }else{
                    count++
                }
            }, 2000)
        }else{
            let hours = new Date().getHours()
            dispatch(updateConsumptionWindow(formatHour(hours)))
            dispatch(updateLoadsConsumption())
        }
        return ()=>{
          clearInterval(timer)
        }
      }, [mode])
    
    
    return (
        <section className='bg-slate-300 text-black pb-2 my-2 flex flex-col gap-4 items-center rounded-md justify-center w-full'>
            <h3 className='font-bold bg-slate-100 w-full text-center rounded-t-md'>Control panel</h3>
            
            <div 
                className='flex flex-col justify-between items-center w-full gap-2 p-1 border-b-2 border-slate-100'
            >
                <h5 className='text-center'>Mode ({mode})</h5>
                <div className='flex justify-between items-center w-full gap-2 p-2'>
                    <button 
                        className={`p-2 rounded-full ${mode==='normal'? 'bg-slate-400': 'bg-primary'} text-slate-200 flex-1`}
                        onClick={()=>handleModeChange('normal')}
                    >
                        Normal
                    </button>
                    <button 
                        className={`p-2 rounded-full ${mode==='fast'? 'bg-slate-400': 'bg-primary'} text-slate-200 flex-1`}
                        onClick={()=>handleModeChange('fast')}
                    >
                        Fast
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center w-full gap-2 p-1'>
                <div className='flex gap-3 items-center'>
                    <FaClock className='text-xl text-primary'/>
                    <h5>Time slot:</h5>
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
            </div>
        </section>
    )
}

export default ConsumptionWindowControl