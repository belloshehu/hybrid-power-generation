import React from 'react'
import './SolarSourceForm.css'

const SolarSourceForm = ({title}) => {
  return (
    <div className='bg-slate-100 rounded-md p-5 text-slate-800'>
        <h3 className='text-xl font-bold text-center border-b-2 mb-5'>{title}</h3>
        <form className='flex flex-col justify-center gap-2'>
            <div className='form-group'>
                <label htmlFor='generated-power'>Generated power (in Mega watts)</label>
                <input 
                    type='text' 
                    id='generated-power'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='pannels'>Number of pannels</label>
                <input 
                    type='number' 
                    id='pannels'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='pannel-wattage'>Pannel wattage (watts)</label>
                <input 
                    type='text' 
                    id='pannel-wattage'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='irradiance'>Irradiance (kwh/m<sup>2</sup>)</label>
                <input 
                    type='float' 
                    step='any'
                    id='irradiance'
                />
            </div>
            <div 
                className='flex justify-between my-2'
                >
                <input 
                    type='submit' 
                    value='Save'
                    className='bg-primary rounded-md p-2 px-5 text-white'
                />
                <button
                    type='submit' 
                    value='Save'
                    className='rounded-md p-2 px-5 text-primary bg-slate-200'
                >
                    discard changes
                </button>
            </div>
        </form>
    </div>
  )
}

export default SolarSourceForm