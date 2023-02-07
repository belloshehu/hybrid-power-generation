import React from 'react'
import './HydroSourceForm.css'

const HydroSourceForm = ({title}) => {
  return (
    <div className='bg-slate-100 rounded-md p-5 text-slate-800'>
        <h3 className='text-xl font-bold text-center border-b-2 mb-5'>{title}</h3>
        <form className='flex flex-col justify-center gap-2'>
            <div className='form-group'>
                <label htmlFor='generated-power'>Generated power (in Mega watt)</label>
                <input 
                    type='text' 
                    id='generated-power'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='head'>Head (in meter)</label>
                <input 
                    type='text' 
                    id='head'
                />
            </div>
            <div className='form-group'>
                <label htmlFor=''>Flow volume (in liter/second)</label>
                <input 
                    type='text' 
                    id='generated-power'
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

export default HydroSourceForm