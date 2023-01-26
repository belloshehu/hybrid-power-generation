import React, { useState } from 'react'
import './Sidebar.css'
import {FaHome, FaChartLine, FaTimes, FaBookOpen} from 'react-icons/fa'
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
    // {
    //     text: 'Plant',
    //     icon: <GiPowerGenerator />,
    //     path: '/plant'
    // },
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
    },
    {
        text: 'About',
        icon: <FaBookOpen />,
        path: '/about'
    }
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <aside 
            className='bg-primary h-screen flex flex-col sidebar-sm-screen sidebar-lg-screen'
        >
            <FaTimes  
                className='md:hidden text-3xl absolute right-2 top-2 text-secondary bg-slate-500 rounded-full'   
            />
            <div 
                className='flex text-secondary text-3xl font-bold flex-1 justify-center'
            >
                <GiElectric 
                    className='text-4xl border-2 border-secondary rounded-full p-2'
                />
                <h2 className=''>Hybrid power</h2>
            </div>

            <ul 
                className='list-none p-0 m-0 flex flex-col gap-2 flex-3 justify-center w-full'
            >
                {navItems.map(item => <NavItem {...item} key={item.text} /> )}
            </ul>
        </aside>
    )
}

export default Sidebar