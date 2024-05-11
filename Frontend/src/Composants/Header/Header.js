import React from 'react'
import background from '../images/IMG.png'
import LogoNavigation from '../LogoNavigation/LogoNavigation';
import Banner from '../Banner/Banner';

const Header = () => {
    
    return (
        <div className="header">
      <LogoNavigation />
      <Banner backgroundImg={background} text="Chez vous, partout et ailleurs" />

    </div>
  );
}
export default Header
