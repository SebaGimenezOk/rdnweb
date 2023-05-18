import React from 'react'
import ReactPlayer from 'react-player'




const Video = () => {
    return (
        <div name='TV' style={{width:'100%',height:'100%', position:'absolute'}} >
            <ReactPlayer  url="https://youtu.be/g7Kx0AKmfTg" width='100%' playing controls loop />
        </div>
    )
} 

export default Video

