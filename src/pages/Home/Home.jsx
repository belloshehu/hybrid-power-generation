import React from 'react'
import HydroSource from '../../components/HydroSource/HydroSource'

const Home = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <HydroSource />
      <HydroSource />
    </section>
  )
}

export default Home