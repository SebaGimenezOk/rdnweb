import React, { useState, useRef, useEffect } from 'react';

import { IoPlayCircleOutline, IoVolumeHighSharp, IoPauseCircleSharp, IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5"

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // const [duration, setDuration] = useState(0);
    const audioPlayer = useRef();
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration); // eslint-disable-line no-unused-vars
        // setDuration(seconds);
        audioPlayer.current.volume = volume;
    }, [audioPlayer?.current?.hasLoadedMetadata, audioPlayer?.current?.readyState, volume]);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    const handleVolumeChange = (event) => {
        setVolume(event.target.value / 100);
    };

    return (
        <div className="flex text-white justify-center items-center  h-20" >
            <audio ref={audioPlayer} src='https://radiostreamingserver.com.ar/proxy/rdn/stream?type=.mp3' preload='metadata'></audio>

            <div>
                < IoPlayBackSharp size={23} />
            </div>
            <button className='flex px-4  justify-center items-center text-sky-600' onClick={togglePlayPause}>
                {isPlaying ? <IoPauseCircleSharp size={35} /> : <IoPlayCircleOutline size={49} />}
            </button>
            <div>
                <IoPlayForwardSharp size={23} />
            </div>

            <div className='justify-center items-center hidden md:flex'>
                <IoVolumeHighSharp size={23} className='ml-7 mr-1' />
                <input type="range" min="0" max="100" onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

export default AudioPlayer
