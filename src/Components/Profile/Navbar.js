import React from 'react';
import img from '../../images/img1.jpg';
import '../../App.css';
const Navbar = () => {
    return (
        <div>
            <nav className='navigation'>
<ul className="liste">
    <img className='img2' src={img} alt=''/>
    <li className='items'>Accueil</li>
    <li className='items'>Services</li>
    <li className='items'>Contact</li>
    <img className='img1' src={img} alt=''/>
</ul>

</nav>
        </div>
    );
}

export default Navbar;
