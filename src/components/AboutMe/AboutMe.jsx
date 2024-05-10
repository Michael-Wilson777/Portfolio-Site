import React from "react";
import "./AboutMe.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

const About = () => {
  return (
    <section className="col-lg-6" id="about">
      <div className="container-fluid pt-5 pe-5 about-container">
        <div className="row justify-content-center ps-5 ms-5 mb-3">
          <div className="col">
            <h2 className="ps-5 title">About Me</h2>
          </div>
        </div>
        <div className="container-fluid text-start about__content">
          <div className="row justify-content-center pe-5 py-5">
            <div className="col-lg text-start pe-5">
              <p className="text-light fs-5">
                I'm a <strong>Software Engineering Student</strong> in the
                Nucamp Full Stack Software Engineering program. I'm an
                enthusiastic and driven Software Engineering student seeking a
                challenging full-time job or internship opportunity to apply and
                expand my technical skills. With a strong academic foundation in
                software engineering and hands-on experience in web development
                practices, I am eager to contribute to innovative projects and
                learn from experienced professionals in the industry. I am a
                quick learner who is always ready to face all challenges that
                are presented and strive to put my best foot forward at all
                times.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center">
          <div className="row align-items-start">
            <div className="col text-start">
              <article className="about__card text-light text-start pe-2">
                <GiGraduateCap className="about__icon" />
                <h5>Certificate</h5>
                <span>
                  HTML, CSS, and Bootsrap <br />
                  <i>Nucamp</i>
                </span>
              </article>
            </div>
            <div className="col">
              <article className="about__card text-light">
                <GiGraduateCap className="about__icon" />
                <h5>Certificate</h5>
                <span>
                  JavaScript Fundamentals <br />
                  <i>Nucamp</i>
                </span>
              </article>
            </div>
            <div className="col">
              <article className="about__card text-light">
                <BsBookmarkStar className="about__icon" />
                <h5>Current GPA</h5>
                <span>95.65</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
