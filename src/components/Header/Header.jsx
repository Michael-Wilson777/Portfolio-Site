import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/Me.JPEG';


const Header = () => {
  return (
    <header id='home' className='mt-0 pt-2 pb-5 ps-5 ms-2 d-flex flex-column text-light header__container container-fluid'>
      <div className="row row-content">

        <div className="col-md-9 text-start mb-md-0 mb-3"> 
          <p className='fs-2'>Hello, I'm ...</p>
          <div className='ps-5 mb-1'>
            <p className='ps-5 my-name shadow'>Michael Wilson</p>
          </div>
          
          <div className='text-center pe-5 me-5'>
          <p className="text-light ps-4 fs-3">Software Engineer</p>
          </div>
          
                   
        </div>

        <div className="col-md-3"> 
          <img className='my-image float-center' src={me} alt='me'/>
          <div className='cta'>
          <CTA />
          </div>
          

        </div>
      </div>
    </header>
  );
}

export default Header;

