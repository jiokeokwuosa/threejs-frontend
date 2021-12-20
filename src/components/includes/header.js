import React from 'react';
import Logo from './../../assets/img/logo192.png';

const Header = () => { 
   return (
    <header id="header" className='container-fluid'>  
      <nav className='row'>
        <div className='col-md-2'>
          <img src={Logo} alt='logo'/>
        </div>
        <div className='col-md-10'>
            <h2>DIGITIZING CONSTRUCTION</h2>
        </div>
      </nav>
    </header> 
  );
}

export default Header;
