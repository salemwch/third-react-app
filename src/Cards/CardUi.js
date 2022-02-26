import React from 'react';
import l1 from '../images/l1.jpg';
import '../App.css';
const Card = () => {
    return (

        <div className='card'>
            <div className='overflow' >
                <img  className='card-image' style={{ width: "100%" }} src={l1} alt='image1' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> The Future Is Here </h4>
                <p className='card-text text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin non ipsum ut auctor.
                    Proin accumsan efficitur orci nec ornare.
                </p>
                <a href='/' className='btn btn-outline-success'> GO Anywhere</a>
            </div>
        </div>


    );
}

export default Card;
