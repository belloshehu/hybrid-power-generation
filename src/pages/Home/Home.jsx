import React from 'react'
import HydroSource from '../../components/HydroSource/HydroSource'
import SolarSource from '../../components/SolarSource/SolarSource'

const Home = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <HydroSource />
      <SolarSource />
    </section>
  )
}

export default Home