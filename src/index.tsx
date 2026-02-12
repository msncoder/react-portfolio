import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/Loader";
import bgDark from "./assets/images/bg-dark.png";

// Preload background image to reduce visible layout shift
const _preloadBg = new Image();
_preloadBg.src = bgDark;

const Root: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const minMs = 1000;
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      setTimeout(() => setShowLoader(false), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <>
      <App />
      {showLoader && <Loader />}
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
