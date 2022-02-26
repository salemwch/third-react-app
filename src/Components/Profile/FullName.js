import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../../App.css';

const Fullname = () => {

    const [name ] = useState('');
    return (
        
        <div>
            <h1 className='title-s'>
                    This IS My Name 
                <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' , zIndex:'2000'}}>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deletSpeed={50}
                        delaySpeed={1000}
                        words={['Salem Ouachouacha']} />
                </span>
                <p>{name}</p>
                

            </h1>
        </div>
    );
}

export default Fullname;
