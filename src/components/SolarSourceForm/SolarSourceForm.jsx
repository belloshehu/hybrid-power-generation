import React from 'react'
import { useSelector } from 'react-redux'
import './SolarSourceForm.css'
import { setParameters } from '../../features/solarSource/solarSourceSlice'
import Form from '../Form/Form'


const SolarSourceForm = ({title}) => {
    const inputs = [
        {
           
            name: 'area',
            label: 'Panel area (meter square)',
            type: 'number',
            step: 'any',
            id: 'area',
            required: true,
            errorMessage: 'Panel area should be more than 0'
        },
        {
           
            name: 'panels',
            label: 'Number of pannels',
            type: 'number',
            step: 'any',
            id: 'panels',
            required: true,
            errorMessage: 'Pannels should be more than 0'
        },
        {
           
            name: 'yield',
            label: 'Panel efficiency/yeild (percentage)',
            type: 'number',
            step: 'any',
            id: 'yield',
            min: 0,
            max: 50,
            required: true,
            errorMessage: 'Pannel efficiency should be between 0 and 1'
        },
        {
           
            name: 'irradiance',
            label: 'Irradiance (w/m square)',
            type: 'number',
            step: 'any',
            id: 'irradiance',
            required: true,
            errorMessage: 'Irradiance should be more than 0'
        },
    ]
    const {
        panelNumber,
        irradiance, 
        panelArea, 
        panelYield
    } = useSelector(store => store.solarSource)

    const initialValues = {
        panels: panelNumber,
        irradiance,  
        area: panelArea,
        yield: panelYield
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