import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './SolarSourceForm.css'
import { setParameters } from '../../features/solarSource/solarSourceSlice'
import { openModal } from '../../features/modal/modalSlice'
import FormInput from '../FormInput/FormInput'

const SolarSourceForm = ({title}) => {
    const inputs = [
        {
           
            name: 'power',
            label: 'Generated power (in Mega watt)',
            type: 'number',
            step: 'any',
            id: 'power',
            required: true,
            errorMessage: 'Power should be more than 0'
        },
        {
           
            name: 'pannels',
            label: 'Number of pannels',
            type: 'number',
            step: 'any',
            id: 'pannels',
            required: true,
            errorMessage: 'Pannels should be more than 0'
        },
        {
           
            name: 'wattage',
            label: 'Pannel wattage (watts)',
            type: 'number',
            step: 'any',
            id: 'wattage',
            required: true,
            errorMessage: 'Pannel wattage should be more than 0'
        },
        {
           
            name: 'irradiance',
            label: 'Irradiance (kwh/m square)',
            type: 'number',
            step: 'any',
            id: 'irradiance',
            required: true,
            errorMessage: 'Irradiance should be more than 0'
        },
    ]
    const dispatch = useDispatch()

    const initialValues = {
        power: 0, 
        pannels: 0,
        irradiance: 0,
        wattage: 0,

    }

    const [values, setValues] = useState(initialValues)

    const handleDiscardChange = (e) =>{
        setValues(initialValues)
    }

    const isValidForm = () =>{
        return (
            values.power > 0  && 
            values.pannels > 0 && 
            values.wattage > 0 && 
            values.irradiance
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

export default SolarSourceForm