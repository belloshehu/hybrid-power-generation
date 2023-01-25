import React from 'react'
import './Sidebar.css'
import {FaHome, FaChartLine} from 'react-icons/fa'
import {GiPowerGenerator, GiElectric} from 'react-icons/gi'
import {ImPower} from 'react-icons/im'
import {TbDevices} from 'react-icons/tb'
import NavItem from '../NavItem/NavItem'

const navItems = [
    {
        text: 'Home', 
        icon: <FaHome />,
        path: '/',
    },
    {
        text: 'Plant',
        icon: <GiPowerGenerator />,
        path: '/plant'
    },
    {
        text: 'Sources',
        icon: <ImPower />,
        path: '/sources'
    },
    {
        text: 'Loads',
        icon: <TbDevices />,
        path: 'loads'
    },
    {
        text: 'Analysis',
        icon: <FaChartLine />,
        path: '/analysis'
    }
]

const Sidebar = () => {
  return (
    <aside className='bg-primary h-screen w-1/5 p-5 flex flex-col justify-start'>
        <div className='flex  text-secondary text-3xl font-bold flex-1 justify-center'>
            <GiElectric className='text-4xl border-2 border-secondary rounded-full p-2'/>
            <h2 className=''>Hybrid power</h2>
        </div>
        <ul className='list-none p-0 m-0 flex flex-col gap-2 flex-3 justify-center'>
            {navItems.map(item => <NavItem {...item} key={item.text} /> )}
        </ul>
    </aside>
  )
}

export default Sidebar