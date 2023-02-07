import React, {useState} from 'react'
import HydroSourceDetails from '../../components/HydroSourceDetails/HydroSourceDetails'
import HydroSourceForm from '../../components/HydroSourceForm/HydroSourceForm'
import SolarSourceDetails from '../../components/SolarSourceDetails/SolarSourceDetails'
import SolarSourceForm from '../../components/SolarSourceForm/SolarSourceForm'

const Source = () => {
    const [activeSource, setActiveSource] = useState('hydro')
  return (
    <section className='w-full flex flex-col gap-2'>
        <section>
        <div 
          className='bg-primary p-1 my-2 flex gap-2 items-center rounded-md justify-between w-full lg:w-[70%]'
        >
            <button
                className={`${activeSource==='hydro'? 'bg-secondary': ''} p-1 px-2  rounded-md`}
                onClick={()=> setActiveSource('hydro')}
            >
                Hydro Source
            </button>
            <button
                className={`${activeSource==='solar'? 'bg-secondary': ''} p-1 px-2 rounded-md`}
                onClick={()=> setActiveSource('solar')}
            >
                Solar Source
            </button>
            <button
                className={`${activeSource==='storage'? 'bg-secondary': ''} p-1 rounded-md`}
                onClick={()=> setActiveSource('storage')}
            >
                Energy storage
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-2 w-full'>
            {
                activeSource === 'hydro'? (
                    <>
                        <HydroSourceForm 
                            title={activeSource}
                        />
                        <HydroSourceDetails />
                    </>
                ): (
                    <>
                        <SolarSourceForm
                            title={activeSource}
                        />
                        <SolarSourceDetails/>
                    </>
                )
            }
        </div>
      </section>
    </section>
  )
}

export default Source