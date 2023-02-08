import React from 'react'
import { useSelector } from 'react-redux'
import Load from '../Load/Load'

const LoadItems = () => {
    const {loadItems} = useSelector(store => store.load)
    const loads = loadItems.map(load => <Load {...load} key={load.name} />)

    return (
        <section 
            className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'
        >
            {loads}
        </section>
    )
}

export default LoadItems