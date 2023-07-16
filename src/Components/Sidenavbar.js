import React from 'react'
import profileImg from '../Images/icons8-male-user-50.png'
import '../CascadingStyleSheet/sidenavbar.css'

const Sidenavbar = ({userName}) => {
  return (
    <div className='sidenavbar-container'>
        <div className='userprofile'>
            <img src={profileImg} alt='profile-img' className='profileImage'/>
            <h2>{userName}</h2>
        </div>
        <div className='option-feature'>
            <h4>Watch</h4>
            <h4>Memories</h4>
        </div>
    </div>
  )
}

export default Sidenavbar