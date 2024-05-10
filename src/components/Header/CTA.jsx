import React from 'react';
import Resume from '../../assets/Resume.docx';

const CTA = () => {

  return (
    
    <div className="container__cta  text-center container">
      <div class="row">
        <div class="col text-start">
          <a href={Resume} download className='btn btn-dark'>Resume</a>
        </div>
      </div>                  
    </div>
  )
}

export default CTA