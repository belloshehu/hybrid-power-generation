import React, {useState} from 'react'
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage'
import './FormInput.css'

const FormInput = ({handleChange:changeHandler, value, inputProps}) => {
    const [focusedInputName, setFocusedInputName] = useState('')
    const [showMessage, setShowMessage] = useState(false)

    const {
        label, 
        name,
        id,
        errorMessage
    } = inputProps

    const handleChange = (e) => {
        changeHandler(e)
        if(parseFloat(e.target.value) > 0){
            setShowMessage(false)
        }else{
            setShowMessage(true)
        }
    }
    const handleFocus = (e) => {
        setFocusedInputName(e.target.name)
    }

    const handleBlur = (e) => {
        console.log(typeof e.target.value)
        if(parseFloat(e.target.value) > 0){
            setShowMessage(false)
        }else{
            setShowMessage(true)
        }
    }
    return (
        <div className='input'>
            <label htmlFor={id}>{label}</label>
                <input  
                    {...inputProps}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={value}
                />
                {
                showMessage &&
                   <InputErrorMessage
                        inputName={name}
                        focusedInputName={focusedInputName}
                        errorMessage={errorMessage}
                        showMessage={showMessage}
                    /> 
                }
        </div>
    )
}

export default FormInput