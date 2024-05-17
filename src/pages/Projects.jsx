import React from "react";
import "./MyProjects.css";
import image from "../../assets/nucampsite.PNG";
import image1 from "../../assets/tic-tac-toe.PNG";
import image2 from "../../assets/rpg.jpg";
import image3 from "../../assets/calc.PNG";

const Projects = () => {
  return (
    <section className="container" id="myprojects">
      <h2 className="heading text-center mb-5">My Projects</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <article className="col">
          <div className="card bg-transparent border-dark justify-content-between">
            <img src={image} className="card-img-top" alt="campsite" />
            <div className="card-body">
              <h5 className="card-title text-light text-center">Campsite</h5>
              <p className="card-text text-light text-center">
                HTML | CSS | Bootstrap | JavaScript
              </p>
            </div>
            <div className="card-footer border-top border-dark text-center">
              <a
                href="https://github.com/Michael-Wilson777/nucampsite"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                File
              </a>
              <a
                href="https://mikewilson777-nucampsite-01.web.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card bg-transparent border-dark justify-content-between">
            <img src={image2} className="card-img-top" alt="RPG" />
            <div className="card-body">
              <h5 className="card-title text-light text-center">RPG</h5>
              <p className="card-text text-light text-center">JavaScript</p>
            </div>
            <div className="card-footer border-top border-dark text-center">
              <a
                href="https://github.com/Michael-Wilson777/dragon-rpg"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                File
              </a>
              <a
                href="https://dragon-master-a0dd6.web.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card bg-transparent border-dark justify-content-between">
            <img
              src={image1}
              className="card-img-top"
              alt="tic-tac-toe board"
            />
            <div className="card-body">
              <h5 className="card-title text-light text-center">Tic-Tac-Toe</h5>
              <p className="card-text text-light text-center">JavaScript</p>
            </div>
            <div className="card-footer border-top border-dark text-center">
              <a
                href="https://github.com/Michael-Wilson777/Tic-Tac-Toe"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                File
              </a>
              <a
                href="https://tic-tac-toe-a4410.web.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card bg-transparent border-dark justify-content-between">
            <img src={image3} className="card-img-top" alt="calculator" />
            <div className="card-body">
              <h5 className="card-title text-light text-center">Calculator</h5>
              <p className="card-text text-light text-center">JavaScript</p>
            </div>
            <div className="card-footer border-top border-dark text-center">
              <a
                href="https://github.com/Michael-Wilson777/Calculator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                File
              </a>
              <a
                href="https://mwcalculator7000.web.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
