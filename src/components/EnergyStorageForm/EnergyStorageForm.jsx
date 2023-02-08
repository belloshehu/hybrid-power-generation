import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setParameters } from '../../features/energyStorage/energyStorageSlice'
import './EnergyStorageForm.css'
import { openModal } from '../../features/modal/modalSlice'
import FormInput from '../FormInput/FormInput'

const EnergyStorageForm = ({title}) => {

    const inputs = [
        {
           
            name: 'batteryVoltage',
            label: 'Battery voltage(volts)',
            type: 'number',
            step: 'any',
            id: 'pannels',
            required: true,
            errorMessage: 'Pannels should be more than 0'
        },
        {
           
            name: 'batteryAh',
            label: 'Battery Ah (Ah)',
            type: 'number',
            step: 'any',
            id: 'batteryAh',
            required: true,
            errorMessage: 'Ah should be more than 0'
        },
        {
           
            name: 'batteries',
            label: 'Number of batteries',
            type: 'number',
            step: 'any',
            id: 'batteries',
            required: true,
            errorMessage: 'Number of batteries should be more than 0'
        },
    ]
    const dispatch = useDispatch()

    const initialValues = {
        batteries: 0, 
        batteryVoltage: 0,
        batteryAh: 0,
        

    }

    const [values, setValues] = useState(initialValues)

    const handleDiscardChange = (e) =>{
        setValues(initialValues)
    }

    const isValidForm = () =>{
        return (
            values.batteries > 0  && 
            values.batteryAh > 0 && 
            values.batteryVoltage > 0
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(true)
        
        if(!isValidForm()){
            dispatch(openModal(
                {
                    title: 'Error', 
                    body: 'Setting parameters failed. Ensure vaild values are entered'
                })
            )
        }else{
            dispatch(setParameters(values))
            dispatch(openModal({title: 'Success', body: 'Parameters successfully set'}))
        }
    }

    const handleChange = (e) => {
        setValues( prev =>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }

  return (
    <div className='bg-slate-100 rounded-md p-5 text-slate-800'>
        <h3 className='text-xl font-bold text-center border-b-2 mb-5'>{title}</h3>
        <form 
            className='flex flex-col justify-center gap-2'
            onSubmit={handleSubmit}
            onReset={handleDiscardChange}
            >
            {
                inputs.map(input => 
                    <FormInput 
                        key={input.name}
                        inputProps={input}
                        value={values[input.name]}
                        handleChange={handleChange}
                    />    
                )
            }
            <div 
                className='flex justify-between my-2'
                >
                <input 
                    type='submit' 
                    value='Save'
                    className='bg-primary rounded-md p-2 px-5 text-white'
                />
                <input
                    type='reset' 
                    value='discard changes'
                    className='rounded-md p-2 px-5 text-primary bg-slate-200'
                />
                
            </div>
        </form>
    </div>
  )
}

export default EnergyStorageForm