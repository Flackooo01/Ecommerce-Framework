// import React from 'react'
import './ExploreOurProduct.css';
// import radioImg from '../Assets/Radio Button/radio.js'
import r1 from '../Assets/Radio Button/Image_1.jpg';
import r2 from '../Assets/Radio Button/Image_2.jpg';
import r3 from '../Assets/Radio Button/Image_3.jpg';
import r4 from '../Assets/Radio Button/Image_4.jpg';
import r5 from '../Assets/Radio Button/Image_5.jpg';

const ExploreOurProduct = () => {
    return (
        <>
        <div className="low-part">
            <h3>Explore Our Product</h3>
        </div>

        <div className="slider">        
            <div className="slides">
                <input type="radio" name="r" id="r1" defaultChecked/>
                <input type="radio" name="r" id="r2"/>
                <input type="radio" name="r" id="r3"/>
                <input type="radio" name="r" id="r4"/>
                <input type="radio" name="r" id="r5"/>
                
                <img src={r1} className="m1" alt="img1"/>
                <img src={r2} className="m2" alt="img2"/>
                <img src={r3} className="m3" alt="img3"/>
                <img src={r4} className="m4" alt="img4"/>
                <img src={r5} className="m5" alt="img4"/>
            </div>
            <div className="navigation">
                <label htmlFor="r1" className="bar"></label>
                <label htmlFor="r2" className="bar"></label>
                <label htmlFor="r3" className="bar"></label>
                <label htmlFor="r4" className="bar"></label>
                <label htmlFor="r5" className="bar"></label>
            </div>
        </div>
        </>
    )
}

export default ExploreOurProduct