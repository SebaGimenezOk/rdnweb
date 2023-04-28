import React from 'react'
import portadaTuiter from '../assets/albumRDN/portada1.png'
import VideoPlayer from "../components/Video";

const Home = () => {
    return (
        <div>Home
        <img className='w-full' src={portadaTuiter} alt="kfsss" />
        <VideoPlayer />
        <img className='w-full' src={portadaTuiter} alt="kfsss" />
        <img className='w-full' src={portadaTuiter} alt="kfsss" />
        </div>
        
    )
}

export default Home