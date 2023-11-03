import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

let isLoading = true;

export default function App() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && isLoading) {
      isLoading = false;

      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,

        strings: ["Developer", "Designer", "Content Creator"],
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/intro.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Shamama Tarif</h1>
          <h3>
            Freelance <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
