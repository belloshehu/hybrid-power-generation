import React from 'react'

const InputErrorMessage = ({showMessage, errorMessage, inputName, focusedInputName}) => {
  return (
    <span 
        className={`text-sm text-red-500 
            ${inputName === focusedInputName ? 'visible': 'hidden'}`
        }
    >
        {errorMessage} 
    </span>
)
}

export default InputErrorMessage