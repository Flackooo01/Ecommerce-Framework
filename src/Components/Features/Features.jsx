// import React from 'react'
import './Features.css'
import features from '../Assets/features/features';
import Item from '../Item/Item';

const Features = () => {
    return (
        <>
        <section id="feature" className="section-p1">
        <div className='features-item'>
            {features.map((item, index)=>{
                    return <Item key={index} id={item.id} name={item.name} image={item.image} />
                })}
            </div>
        </section>

        </>
    )
}

export default Features