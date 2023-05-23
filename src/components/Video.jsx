import React from 'react'
import ReactPlayer from 'react-player'




const Video = () => {
    return (
        <div name='Video' className='h-screen w-auto'>
            <ReactPlayer
                width='100%' height='100%' url='https://www.twitch.tv/radiodelasnaciones' playing controls loop />
        </div>
    )
}

export default Video

