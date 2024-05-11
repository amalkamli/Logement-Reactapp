import React from 'react'
import L_Footer from '../images/LOGOFooter.png';
import '../Footer/Footer.css';
const Footer = () => {
  return (
    <div className="conteneur-footer">
      <img className='background-footer' src={L_Footer} alt='footer'/>
      <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer