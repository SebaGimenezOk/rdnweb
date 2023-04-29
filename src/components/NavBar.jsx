import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import FaviconRDN from '../assets/albumRDN/logofavicon2.png'
import AudioPlayer from './AudioPlayer';



const NavBar = () => {
    const [nav, setNav] = useState(false);


    const links = [
        {
            id: 1,
            link: 'Inicio'
        },
        {
            id: 2,
            link: 'Institucional'
        },
        {
            id: 3,
            link: 'Video'
        },
        {
            id: 4,
            link: 'Podcast'
        },
        {
            id: 5,
            link: 'Contact'
        },

    ]

    return (
        <div className="flex justify-evenly items-center text-white bg-slate-950  w-full h-24 px-4  mr-3 fixed">
            <div>
                <img className="w-20 top-0 " src={FaviconRDN} alt="logotype" />
                <h1 className='text-2xl font-light'>94.9Mhz</h1>
            </div>
            <AudioPlayer />


            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-light  hover:scale-105 duration-200'>{link}</li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from bg-slate-950 to-slate-800 '>

                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link}</li>
                    ))}

                </ul>
            )}


        </div>
    )
}

export default NavBar