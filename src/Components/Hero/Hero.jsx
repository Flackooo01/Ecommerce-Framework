
import Slider from '../SliderImage/Slider';
import images from '../Assets/Background/backgroud.js';
import './Hero.css';

const Hero = () => {
    return (
        <>
        <div className='text-box'>
            <h1>Welcome To Gaming Accessories</h1>
                <Slider>
                    {images.map((image, index)=>{
                        return <img key={index} src={image.imgURL} alt={image.imgAlt} style={{zIndex : -2}}/>;
                    })}
                </Slider>
        </div>

        </>

    )
}

export default Hero

import React from 'react'
