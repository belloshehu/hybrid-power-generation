import React from 'react'
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage'

const FormInput = (props) => {
    const {
        label,
        handleBlur, 
        handleChange, 
        handleFocus, 
        focusedInputName, 
        errorMessage, 
        ...inputProps
    } = props

    return (
        <div>
            <label htmlFor={inputProps.id}>{label}</label>
                <input  
                    {...inputProps}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={value}
                />
                <InputErrorMessage
                    inputName={name}
                    focusedInputName={focusedInputName}
                    errorMessage={errorMessage}
                />
        </div>
    )
}

export default FormInput