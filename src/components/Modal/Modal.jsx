import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../features/modal/modalSlice'

const Modal = () => {
    const {message} = useSelector(store => store.modal)
    const dispatch = useDispatch()

    return (
        <div className='absolute z-10 w-screen h-screen bg-black bg-opacity-80 flex flex-col justify-center items-center'>
            <div 
                className='bg-white w-[90%] min-h-[200px] lg:w-[30%] flex flex-col text-center justify-center gap-2 items-center rounded-md p-5 relative'    
            >
                <FaTimes 
                    className='text-xl text-red-700 absolute top-2 right-2'
                    onClick={()=> dispatch(closeModal())}
                />
                <h1 className='text-xl font-bold text-green-600'>{message.title}</h1>
                <div className='bg-slate-100 rounded-md p-2 w-full h-full flex flex-col justify-center'>
                    <p className=''>{message.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal