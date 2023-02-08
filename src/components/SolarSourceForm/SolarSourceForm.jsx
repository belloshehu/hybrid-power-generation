import React from 'react'
import { useSelector } from 'react-redux'
import './SolarSourceForm.css'
import { setParameters } from '../../features/solarSource/solarSourceSlice'
import Form from '../Form/Form'


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
    const {
        panelNumber,
        powerGenerated,
        irradiance, 
        panelWattage
    } = useSelector(store => store.solarSource)

    const initialValues = {
        pannels: panelNumber,
        power: powerGenerated,
        irradiance, 
        wattage: panelWattage
    }
    return (
        <Form 
            initialValues={initialValues}
            title={title}
            inputs={inputs}
            setParameters={setParameters}
        />
    )
}

export default SolarSourceForm