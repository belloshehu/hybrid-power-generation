import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'

const NavItem = ({text, icon, path}) => {
    const {pathname} = useLocation()
    const isMatch = useMatch(path, pathname)
    return (
        <li className={`py-3 px-6 rounded-full shadow-sm shadow-black group ${isMatch? 'bg-slate-800 text-slate-300': 'text-primary bg-black'}`}>
            <Link className='flex gap-3 items-center text-white text-2xl group-hover:px-10 slow-transition' to={path}>
                {icon} <span className='text-primary text-xl'>{text}</span>
            </Link>
        </li>
    )
}

export default NavItem