import React from 'react';
import VideoCar from '../assets/luxuryCar.mp4'

const Video = () => {
    return (
        <div>
            <video width="100%" height="100%" controls>
                <source src={VideoCar} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;