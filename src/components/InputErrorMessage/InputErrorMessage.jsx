import React from 'react'

const InputError = ({errorMessage, inputName, focusedInputName}) => {
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

export default InputError