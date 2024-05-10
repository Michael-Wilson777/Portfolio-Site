import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BsMedium } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="container header__socials text-end ps-4 pt-3">
      <div className='row justify-content-end'>
        <div className='col-1'>
          <a className='linkedin pb-5' href="https://www.linkedin.com/in/thakshila-bandara-2791b9214" target="_blank" rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem' }} />
            
          </a>
          <a className='git' href="https://github.com/Thakshila-Bandara" target="_blank" rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }} />
          </a>
          <a href="https://medium.com/@thakshiladb2000" target="_blank" rel='noreferrer'>
            <BsMedium />
          </a>
        </div>
        <div className='col-1'>
          
        </div>
        <div className='col-1'>

        </div>
      </div>
    </div>
  );
}

export default HeaderSocials;