import "./scrollup.css";
import { useEffect } from "react";

const Scrollup = () => {
  useEffect(() => {
    const scrollup = document.querySelector(".scrollup");
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 500) {
        scrollup.classList.add("show-scroll");
      } else {
        scrollup.classList.remove("show-scroll");
      }
    });
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default Scrollup;
