import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";

const Project = () => {
  return (
    <>
      <h1 className="project__page__title">My Projects</h1>
      <div className="project__container">
        <div className="project__img__container">
          <img className="img1" src="pokemon_proj.png" />
        </div>

        <div className="project__text">
          <div className="project__header">
            <div className="project__left__container">
              <h2 className="project__title ">Pokemon Match Game </h2>
            </div>

            <div className="project__right__container">
              <a href=" https://github.com/andrewtonster" target="_blank">
                Github
              </a>
              <a
                href=" https://650a78bf63b6e309ff956b55--fastidious-nasturtium-ade0f2.netlify.app/"
                target="_blank"
              >
                Website
              </a>
            </div>
          </div>
          <p className="game__description">
            A game that challenges users to pair up similar Pokémon in an effort
            to match as many identical ones as possible.
          </p>
          <h3 className="project__features">Characteristics</h3>
          <h2 className="technologies"></h2>
          <ul className="features__list">
            <li>Learned how to develop a dynamic website using React.</li>
            <li>
              Utilized API calls to fetch detailed information about Pokemon
              from the Pokemon API to develop dynamic cards.
            </li>
            <li>
              Learned how to use key hooks in React like useState and useEffect.
            </li>
          </ul>
          <div>
            <b className="technologies__title">Technologies used:</b>
            <ul className="technologies">
              <li>
                <AiFillHtml5 /> HTML
              </li>
              <li>
                <BiLogoCss3 /> CSS
              </li>
              <li>
                <BiLogoReact /> React
              </li>
              <li>
                <TbBrandJavascript /> JavaScript
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="project__container">
        <div className="project__img__container">
          <img className="img1" src="portfolio.png" />
        </div>

        <div className="project__text">
          <div className="project__header">
            <div className="project__left__container">
              <p className="project__title ">Portfolio Website </p>
            </div>

            <div className="project__right__container">
              <a href=" https://github.com/andrewtonster" target="_blank">
                Github
              </a>
              <a href=" https://github.com/andrewtonster" target="_blank">
                Website
              </a>
            </div>
          </div>
          <p className="game__description">
            You are looking at this website right now! This is my portfolio
            website which highlights the projects I have worked on and gives
            some information about me!
          </p>
          <h3 className="project__features">Characteristics</h3>
          <ul className="features__list">
            <li>
              Utilized transitions to enhance the website's visual appeal and
              user experience.
            </li>
            <li>Learned how to employ Figma to create blueprint designs.</li>
            <li>
              Implemented responsive design principles, to adjust to different
              PC devices
            </li>
          </ul>
          <div>
            <b>Technologies used:</b>
            <ul className="technologies">
              <li>
                <AiFillHtml5 /> HTML
              </li>
              <li>
                <BiLogoCss3 /> CSS
              </li>
              <li>
                <BiLogoReact /> React
              </li>
              <li>
                <TbBrandJavascript /> JavaScript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
