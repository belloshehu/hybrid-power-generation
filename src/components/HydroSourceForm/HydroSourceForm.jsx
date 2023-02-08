import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setParameters } from '../../features/hydroSource/hydroSourceSlice'
import { openModal } from '../../features/modal/modalSlice'
import FormInput from '../FormInput/FormInput'
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage'
import './HydroSourceForm.css'

const HydroSourceForm = ({title}) => {
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
           
            name: 'head',
            label: 'Head (in meter)',
            type: 'number',
            step: 'any',
            id: 'head',
            required: true,
            errorMessage: 'Head should be more than 0'
        },
        {
           
            name: 'flow',
            label: 'Flow volume (in liter/second)',
            type: 'number',
            step: 'any',
            id: 'flow',
            required: true,
            errorMessage: 'Flow volume should be more than 0'
        },
    ]
    const dispatch = useDispatch()
    const initialValues = {
        power: 0, 
        head: 0,
        flow: 0,
    }

    const [values, setValues] = useState(initialValues)
    const [valid, setValid] = useState(false)
    

    const handleDiscardChange = (e) =>{
        setValues(initialValues)
    }

    const isValidForm = () =>{
        return values.flow > 0  && values.head > 0 && values.flow > 0
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
                    // onClick={handleDiscardChange}
                    value='discard changes'
                    className='rounded-md p-2 px-5 text-primary bg-slate-200'
                />
                
            </div>
        </form>
    </div>
  )
}

export default HydroSourceForm