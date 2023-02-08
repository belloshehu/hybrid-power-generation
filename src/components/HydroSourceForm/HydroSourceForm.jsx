import React from 'react'
import { useSelector } from 'react-redux'
import { setParameters } from '../../features/hydroSource/hydroSourceSlice'
import Form from '../Form/Form'
import './HydroSourceForm.css'

const HydroSourceForm = ({title}) => {
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
           
            name: 'head',
            label: 'Head (in meter)',
            type: 'number',
            step: 'any',
            id: 'head',
            required: true,
            errorMessage: 'Head should be more than 0'
        },
        {
           
            name: 'flow',
            label: 'Flow volume (in liter/second)',
            type: 'number',
            step: 'any',
            id: 'flow',
            required: true,
            errorMessage: 'Flow volume should be more than 0'
        },
    ]
    const hydroSource = useSelector(store => store.hydroSource)
    const initialValues = {
        head: hydroSource.head, 
        flow: hydroSource.flowVolume,
        power: hydroSource.powerGenerated
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

export default HydroSourceForm