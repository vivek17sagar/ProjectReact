import React from 'react'
import '../CascadingStyleSheet/Navbar.css'
import img1 from '../Images/icons8-home-32.png'
import img2 from '../Images/icons8-event-48.png'
import img3 from '../Images/icons8-services-24.png'
import img4 from '../Images/icons8-products-30.png'
import img5 from '../Images/icons8-bell-24.png'
import img6 from '../Images/icons8-cart-30.png'
import logo from '../Images/logo.jpeg'

const Navbar = () => {
  return (
    <>
    <div className='navbar-container'>
        <div className='lef-container'>
        <img src={logo} alt='logo-img' className='logo-image'></img>
        <input type='name' placeholder='Search' className='product-search'></input>
        </div>
        <div className='middle-container'>
            <div>
                <img src={img1} alt='home-image' className='nav-pro'/>
                <div>Home</div>
            </div>
            <div>
                <img src={img2} alt='event-image' className='nav-pro'/>
                <div>Events</div>
            </div>
            <div>
                <img src={img3} alt='services-image' className='nav-pro'/>
                <div>Services</div>
            </div>
            <div>
                <img src={img4} alt='products-image' className='nav-pro'/>
                <div>Products</div>
            </div>
        </div>
        <div className='righ-container'>
            <img src={img5} alt='bell-image' className='nav-pro'/>
            <img src={img6} alt='cart-image' className='nav-pro'/>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Navbar