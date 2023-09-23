import React from "react";

const Body = () => {
  return (
    <>
      <div className="body__grid">
        <h1 className="body__header">Hello my name is Andrew Ton</h1>
        <div className="body__img__container">
          <img src="robot.png" className="body__img"></img>
        </div>

        <h1 className="body__description">
          I'm an undergraduate student with a deep passion for technology and a
          strong desire to make an impact in the world of software development.
          I aspire to become a fullstack developer, and I love learning new
          things from people around me!
        </h1>
      </div>
    </>
  );
};

export default Body;
