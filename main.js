import "normalize.css";
import "./sass/style.scss";

const menu = document.querySelector("header .nav .nav__menu");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const links = document.querySelector(".nav__links");

menu.onclick = () => {
  const isActive = header.classList.contains("active");

  if (isActive) {
    links.classList.remove("fade-in");
    overlay.classList.remove("fade-in");
    links.classList.add("fade-out");
    overlay.classList.add("fade-out");
  } else {
    links.classList.remove("fade-out");
    overlay.classList.remove("fade-out");
    links.classList.add("fade-in");
    overlay.classList.add("fade-in");
  }

  document.documentElement.style.overflow = isActive ? 'scroll' : "hidden";
  header.classList.toggle("active");
};
