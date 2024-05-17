import React from 'react';
import './resume.css'; // Ensure styles are scoped to this component


const Resume = () => {
  return (
    <div className="resume">
      <div className="container text-start">
        <div className="row row-content justify-content-start">
          <div className="col align-self-start">
            <div className="container-fluid resume-header text-start">
              <div className="row justify-content-start">
                <div className="col-8 align-self-start">
                  <h1>Michael Wilson</h1>
                  <h5>Software Engineer</h5>
                </div>
                <div className="col">
                  <span className="city">North Branford, CT</span>
                  <a className="email" href="mailto:michaelwilson777@gmail.com">
                    michaelwilson777@gmail.com
                  </a>
                  <a
                    className="email"
                    href="https://linkedin.com/in/michael-wilson-649464224"
                  >
                    linkedin.com/in/michael-wilson-649464224
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid ps-0 text-center">
              <div className="row">
                <div className="col">
                  <span className="summary-head fs-4">Professional Summary:</span>
                  <p className="summary text-start lh-sm">
                    Dedicated U.S. Army veteran and seasoned professional with a
                    proven track record in precision engineering roles, now driven
                    to excel in the dynamic field of web development. Adept at
                    thriving in collaborative environments, leveraging critical
                    thinking and problem-solving skills honed in high-pressure
                    settings. Eager to apply a diverse skill set and unwavering
                    work ethic to contribute to innovative software solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid ps-0 text-start work lh-sm">
              <div className="row justify-content-start">
                <div className="col text-start">
                  <p className="work-head text-start fs-5">Work Experience</p>
                  <div className="job-description lh-sm">
                    <p className="job-name text-start fs-6">
                      <span className="pe-1">Sheetmetal Workers Local Union 40</span> |
                      <span className="px-1"> Rocky Hill, CT </span>
                      <br />
                      <span className="dates">06/2022 - Present</span>
                    </p>
                    <ul className="lh-sm">
                      <li>
                        Installed ornate architectural metal roofing systems in
                        small teams, demonstrating critical thinking and
                        problem-solving skills.
                      </li>
                      <li>
                        Adapted quickly to varying job requirements, ensuring
                        efficient and precise installations.
                      </li>
                      <li>
                        Maintained open communication with supervisors to track
                        project progress and task completion.
                      </li>
                      <li>
                        Led a team of 5 sheet metal workers to complete a
                        high-profile project ahead of schedule, resulting in a 95%
                        client satisfaction rate and repeat business.
                      </li>
                    </ul>
                  </div>
                  <div className="job-description">
                    <p className="job-name text-start">
                      <span className="pe-1 fs-6">Aircraft Welding And Mfg Co.</span> |
                      <span className="px-1 fs-6"> East Hartford, CT </span>
                      <br />
                      <span className="dates">06/2021 - 06/2022</span>
                    </p>
                    <ul className="lh-sm">
                      <li>
                        Independently determined optimal welding processes for
                        aircraft parts, exhibiting strong critical thinking skills.
                      </li>
                      <li>
                        Managed time effectively to meet production deadlines and
                        ensure timely shipment of welded parts to customers.
                      </li>
                      <li>
                        Achieved 100% compliance with industry welding standards,
                        ensuring product safety and quality, and passing all
                        regulatory inspections with zero non-conformities.
                      </li>
                    </ul>
                  </div>
                  <div className="job-description">
                    <p className="job-name text-start">
                      <span className="pe-1 fs-6">Hillery Company</span> |
                      <span className="px-1 fs-6"> Groton, CT </span>
                      <br />
                      <span className="dates">06/2021 - 11/2021</span>
                    </p>
                    <ul>
                      <li>
                        Independently determined optimal welding processes for
                        aircraft parts, exhibiting strong critical thinking skills.
                      </li>
                      <li>
                        Managed time effectively to meet production deadlines and
                        ensure timely shipment of welded parts to customers.
                      </li>
                      <li>
                        Achieved 100% compliance with industry welding standards,
                        ensuring product safety and quality, and passing all
                        regulatory inspections with zero non-conformities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start bottom">
                <div className="col-4">
                  <h3 className="text-start fs-5 ps-4 mt-1">Skills</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Problem Solving</li>
                    <li>Critical Thinking</li>
                    <li>Communication</li>
                    <li>Time Management</li>
                  </ul>
                </div>
                <div className="col-3 education">
                  <h3 className="text-center fs-5 mt-1">Education</h3>
                  <div className="container-fluid text-center">
                    <h6>Nucamp</h6>
                    <article className="pb-1">Full Stack Software Engineering</article>
                    <p className="dates">11/2024 - Present</p>
                  </div>
                </div>
                <div className="col">
                  <h3 className="text-center fs-5 mt-1">Projects</h3>
                  <div className="links text-center">
                    <a href="/">https://github.com/Michael-Wilson777</a>
                    <a href="/">https://myportfoliosite.com/</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
