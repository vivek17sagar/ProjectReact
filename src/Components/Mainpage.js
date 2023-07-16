import React from 'react'
import Navbar from './Navbar'
import Sidenavbar from './Sidenavbar'
import '../CascadingStyleSheet/mainpage.css'
import Content from './Content'
import { useLocation } from 'react-router'

const Mainpage = () => {

    const location = useLocation();

    console.log(location.state.userneed)
  return (
    <div>
        <Navbar/>
            <div className='bottom-container'>
                <Sidenavbar userName={location.state.userneed}/>
                <Content userName={location.state.userneed}/>
            </div>
    </div>
  )
}

export default Mainpage