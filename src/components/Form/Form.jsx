import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../features/modal/modalSlice'
import FormInput from '../FormInput/FormInput'

const Form = ({title, initialValues, inputs, setParameters}) => {

    const dispatch = useDispatch()

    const [values, setValues] = useState(initialValues)

    const handleDiscardChange = (e) =>{
        setValues(initialValues)
    }

    const isValidForm = () =>{
        return Object.values(values).filter(value => value <=0).length === 0
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

export default Form