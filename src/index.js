import Home from "./assets/js/home";
import "./assets/bootstrap/css/bootstrap.min.css";
const importAll = (r) => {
  return r.keys().map(r);
};
importAll(require.context("./assets/bootstrap/js/", true, /\.js$/));

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg)$/)
);

const bodyBg = () => {
  document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${images[0]}) no-repeat`;
  document.body.style.backgroundSize = "auto, cover";
};

const contentChilds = () => {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const tabs = document.createElement("div");
  tabs.setAttribute("id", "tab");
  content.appendChild(header);
  content.appendChild(tabs);
};

const restHeader = () => {
  const header = document.getElementById("header");
  const element = document.createElement("h1");
  element.classList.add(
    "text-center",
    "text-white",
    "d-none",
    "d-lg-block",
    "site-heading"
  );
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  span1.innerText = "Restaurant & tea Room";
  span2.innerText = "RAYHANA";
  span1.classList.add(
    "text-primary",
    "site-heading-upper",
    "mb-3",
    "font-weight-bold"
  );
  span2.classList.add("site-heading-lower");
  element.appendChild(span1);
  element.appendChild(span2);
  header.appendChild(element);
};

document.addEventListener("DOMContentLoaded", () => {
  bodyBg();
  contentChilds();
  restHeader();
  Home.renderHome(images[1]);
});
