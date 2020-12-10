import _ from "lodash";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.min.js";
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./assets/js/", true, /\.js$/));
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets//img/", false, /\.(png|jpe?g|svg)$/)
);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

document.body.appendChild(component());
