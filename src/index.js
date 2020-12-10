import _ from "lodash";
import "./assets/css/bootstrap.min.css";
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./assets/js/", true, /\.js$/));
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg)$/)
);

document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${images[0]}) no-repeat`;
document.body.style.backgroundSize = "auto, cover";
// const navBar = () => {
//   const element = document.createElement("nav");
//   element.setAttribute("id", "mainNav");
//   element.style.background = "rgba(230,167,86,0.95)";
//   element.classList.add(
//     "navbar,navbar-dark,navbar-expand-lg,sticky-top,py-lg-4"
//   );
//   element.innerHTML = `Hello`;
//   return element;
// };
// document.body.appendChild(navBar());
