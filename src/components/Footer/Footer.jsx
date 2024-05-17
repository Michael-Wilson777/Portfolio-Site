import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Contact from "../../pages/ContactPage/ContactMe";

const Footer = () => {
  return (
    <footer>
      <section className="container-fluid text-center px-5">
        <div className="row row-content justify-content-center">
          <div className="col-md-6 align-self-center">
            <div className="text-center">
              <h1 className="text-light">Thank You!</h1>
              <a
                className="fs-2 pe-3"
                href="https://www.linkedin.com/in/michael-wilson-649464224/"
              >
                <BsLinkedin />
              </a>
              <a className="fs-2" href="https://github.com/Michael-Wilson777">
                <BsGithub />
              </a>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <Contact />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
