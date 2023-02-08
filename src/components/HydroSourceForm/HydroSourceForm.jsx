import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setParameters } from '../../features/hydroSource/hydroSourceSlice'
import { openModal } from '../../features/modal/modalSlice'
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage'
import './HydroSourceForm.css'

const HydroSourceForm = ({title}) => {
    const dispatch = useDispatch()
    const initialValues = {
        power: 0, 
        head: 0,
        flow: 0,
    }

    const [focusedInputName, setFocusedInputName] = useState('')
    const [values, setValues] = useState(initialValues)
    const [valid, setValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleDiscardChange = (e) =>{
        setValues(initialValues)
    }
    const handleBLur = (e) => {
        console.log(typeof e.target.value)
        if(e.target.value === '0'){
            setErrorMessage('Value cannot be zero')
            setValid(true)
        }else{
            setErrorMessage('')
            setValid(false)
        }
    }

    const handleFocus = (e) => {
        setFocusedInputName(e.target.name)
        console.log(e.target.name)
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
        console.log(values)
    }
  return (
    <div className='bg-slate-100 rounded-md p-5 text-slate-800'>
        <h3 className='text-xl font-bold text-center border-b-2 mb-5'>{title}</h3>
        <form 
            className='flex flex-col justify-center gap-2'
            onSubmit={handleSubmit}
            onReset={handleDiscardChange}
            >
            <div className='form-group'>
                <label htmlFor='power'>Generated power (in Mega watt)</label>
                <input 
                    required
                    type='number'
                    step='any' 
                    id='power'
                    name='power'
                    value={values.power}
                    onChange={handleChange}
                    onBlur={handleBLur}
                    onFocus={handleFocus}
                />
                <InputErrorMessage
                    inputName='power'
                    focusedInputName={focusedInputName}
                    errorMessage={errorMessage}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='head'>Head (in meter)</label>
                <input 
                    required
                    type='number' 
                    id='head'
                    step='any'
                    name='head'
                    onChange={handleChange}
                    value={values.head}
                    onBlur={handleBLur}
                    onFocus={handleFocus}
                />
                <InputErrorMessage
                    inputName='head'
                    focusedInputName={focusedInputName}
                    errorMessage={errorMessage}
                />
                
            </div>
            <div className='form-group'>
                <label htmlFor='flow-volume'>Flow volume (in liter/second)</label>
                <input 
                    required
                    type='number' 
                    id='flow-volume'
                    step='any'
                    name='flow'
                    onChange={handleChange}
                    value={values.flow}
                    onBlur={handleBLur}
                    onFocus={handleFocus}
                />
                <InputErrorMessage
                    inputName='flow'
                    focusedInputName={focusedInputName}
                    errorMessage={errorMessage}
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