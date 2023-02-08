import React from 'react'
import './EnergyStorageForm.css'

const EnergyStorageForm = ({title}) => {
  return (
    <div className='bg-slate-100 rounded-md p-5 text-slate-800'>
        <h3 className='text-xl font-bold text-center border-b-2 mb-5'>{title}</h3>
        <form className='flex flex-col justify-center gap-2'>
            <div className='form-group'>
                <label htmlFor='pannels'>Number of batteries</label>
                <input 
                    type='number' 
                    id='batteries'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='battery-voltage'>Battery voltage(volts)</label>
                <input 
                    type='number' 
                    id='battery-voltage'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='irradiance'>Battery Ah(Ah)</label>
                <input 
                    type='number' 
                    id='battery-ah'
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

export default EnergyStorageForm