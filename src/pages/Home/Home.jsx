import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HydroSource from '../../components/HydroSource/HydroSource'
import LoadItems from '../../components/LoadItems/LoadItems'
import SolarSource from '../../components/SolarSource/SolarSource'
import { FaClock } from 'react-icons/fa'
import { 
  calculateConnectedTotalLoad, 
  calculateTotalLoad 
} from '../../features/load/loadSlice'
import LineChart from '../../components/LineChart/LineChart'
import EnergyStorage from '../../components/EnergyStorage/EnergyStorage'
import { calculatePower } from '../../features/hydroSource/hydroSourceSlice'


const Home = () => {
  const [totalGeneratedPower, setTotalGeneratedPower] = useState(0)
  const [totalConnectedPower, setTotalConnectedPower] =  useState(0)

  const hydroSource = useSelector(store => store.hydroSource)
  const solarSource = useSelector(store => store.solarSource)

  const {totalConnectedLoad, totalLoad, consumptionWindow} = useSelector(store => store.load)
  const dispatch = useDispatch()

  const calculateTotalConnectedPower = () =>{
    let total = 0
    total += solarSource.isRunning? solarSource.powerGenerated : 0
    total += hydroSource.isRunning? hydroSource.powerGenerated : 0
    total = total.toFixed(2)
    setTotalConnectedPower(total)
  }

  useEffect(() => {
    dispatch(calculateTotalLoad())
    dispatch(calculateConnectedTotalLoad())
  }, [consumptionWindow])
  
  useEffect(()=>{
    dispatch(calculatePower())
    let total = hydroSource.powerGenerated + solarSource.powerGenerated
    setTotalGeneratedPower(total)
  }, [])

  useEffect(()=>{
    calculateTotalConnectedPower()
  }, [solarSource.isRunning, hydroSource.isRunning])

  return (
    <section className='w-full flex flex-col gap-2'>
      <section>
        <div 
          className='bg-primary p-1 my-2 flex gap-2 items-center rounded-md justify-center'
        >
          <span 
            className='text-slate-900 border-r-2 border-secondary pr-2'
          >
            Total available: {totalGeneratedPower.toFixed(2)} MW
          </span>
          <span 
            className='text-slate-100'
          >
            Total Connected: {totalConnectedPower} MW
          </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
          <HydroSource />
          <SolarSource />
          <EnergyStorage />
        </div>
      </section>

      <section className=''>
        <div 
          className='bg-primary p-1 my-2 flex flex-wrap gap-2 items-center rounded-md justify-center'
        >
          <span 
            className='text-slate-900 border-r-2 border-secondary pr-2'
          >
            Total available: {(totalLoad / 1000).toFixed(2) } MW
          </span>
          <span 
            className='text-slate-100 border-r-2 border-secondary pr-2'
              >
                Total connected: {(totalConnectedLoad / 1000).toFixed(2)} MW
          </span>
          <div className='flex gap-3 items-center'>
            <FaClock className='text-xl text-white'/>
            <p>{consumptionWindow.time.from} - {consumptionWindow.time.to}</p>
        </div>
        </div>
        <LoadItems />
      </section>
    </section>
  )
}

export default Home