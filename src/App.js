import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useRef } from "react";
import { ImArrowDown2 } from "react-icons/im";
import Projects from "./components/Projects";

function App() {
  const secondViewportRef = useRef(null);

  const scrollToSecondViewport = () => {
    // Scroll to the second viewport section with smooth behavior
    secondViewportRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container">
      <section className="section">
        <Header />
        <Body />
        <div className="btn__container">
          <button onClick={scrollToSecondViewport} className="main__btn">
            Check out my projects!
            <ImArrowDown2 />
          </button>
        </div>
      </section>

      <section ref={secondViewportRef} className=" section body__projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
