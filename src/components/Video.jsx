import React from 'react'
import ReactPlayer from 'react-player'




const Video = () => {
    return (
        <div name='TV' className='w-full h-screen bg-black  '>
            <ReactPlayer width={'100%'} height={'100%'} url="https://www.youtube.com/embed/Fpn1imb9qZg" controls loop/>
        </div>
    )
}

export default Video
