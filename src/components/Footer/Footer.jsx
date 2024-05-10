import React from 'react';
//import './Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <section className="container-fluid pb-3 text-center">
        <div className="row row-content justify-content-center">
          
          <div className="col align-items-center">
            <div className='text-center'>
              <h1 className='text-light'>Thank You!</h1>
            <a className='fs-2 pe-3' href="https://www.linkedin.com/in/michael-wilson-649464224/"><BsLinkedin /></a>
            <a className='fs-2' href="https://github.com/Michael-Wilson777"><BsGithub /></a>
            </div>
            {/* Add other social media icons here */}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
