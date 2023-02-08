import React, {useState} from 'react'
import './EnergyStorageForm.css'
import { useSelector } from 'react-redux'
import Form from '../Form/Form'
import { setParameters } from '../../features/energyStorage/energyStorageSlice'

const EnergyStorageForm = ({title}) => {

    const {
        batteryVoltage, 
        batteryAh, 
        numberOfBatteries, 
    } = useSelector(store => store.energyStorage)
    const initialValues = {batteryVoltage, batteryAh, batteries:numberOfBatteries}
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

    return (
        <Form 
            initialValues={initialValues}
            title={title}
            inputs={inputs}
            setParameters={setParameters}
        />
    )
}

export default EnergyStorageForm