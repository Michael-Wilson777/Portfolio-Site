import React from 'react';
import './Header.css';
// import CTA from './CTA';
import me from '../../assets/Me.JPEG';

const Header = () => {
  return (
    <header id='home' className='mt-0 pt-2 text-light header__container container-fluid'>
      <div className="row row-content">
        <div className="col-6">
          <img className='my-image' src={me} alt='me'/>
            <a href="mailto:michaelwilson777@gmail.com">Send a message</a>         
        </div>
      </div>
    </header>
  );
}

export default Header;