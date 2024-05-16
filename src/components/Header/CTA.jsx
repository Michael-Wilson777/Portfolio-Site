import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from '../myResume/Resume';

const CTA = () => {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    setShowResume(!showResume);
  };

  return (
    <>
      <div className="container__cta text-center container mb-2">
        <div className="row">
          <div className="col text-start">
            <button onClick={handleShowResume} className="btn btn-dark">Resume</button>
          </div>
        </div>
      </div>
      {showResume && (
        <body>
        <div className="resume-container">
          <Resume />
        </div>
        </body>
      )}
    </>
  );
};

export default CTA;

