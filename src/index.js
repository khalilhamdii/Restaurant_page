import NavFooter from './assets/js/navAndFooter';
import Restaurant from './assets/js/restaurant';

import './assets/bootstrap/css/bootstrap.min.css';

const importAll = (r) => r.keys().map(r);
importAll(require.context('./assets/bootstrap/js/', true, /\.js$/));

const images = importAll(
  require.context('./assets/img/', false, /\.(png|jpe?g|svg)$/),
);

const bodyBg = () => {
  document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${images[0]}) no-repeat`;
  document.body.style.backgroundSize = 'auto, cover';
};

const contentChilds = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('div');
  const header = document.createElement('div');
  const tabs = document.createElement('div');
  const footer = document.createElement('div');
  nav.setAttribute('id', 'nav');
  nav.classList.add('sticky-top');
  header.setAttribute('id', 'header');
  tabs.setAttribute('id', 'tab');
  footer.setAttribute('id', 'footer');
  content.appendChild(nav);
  content.appendChild(header);
  content.appendChild(tabs);
  content.appendChild(footer);
};

const renderTabs = (() => {
  const homeTab = () => {
    Restaurant.renderHome(images[1]);
  };

  const serviceTab = () => {
    Restaurant.renderService(images[2], images[3], images[4]);
  };

  const visitTab = () => {
    Restaurant.renderVisit();
  };
  return { homeTab, serviceTab, visitTab };
})();

document.addEventListener('DOMContentLoaded', () => {
  bodyBg();
  contentChilds();
  NavFooter.renderNav();
  NavFooter.renderHeader();
  NavFooter.renderFooter();
  Restaurant.renderHome(images[1]);
  const homeItem = document.getElementById('home');
  const serviceItem = document.getElementById('service');
  const visitItem = document.getElementById('visit-us');
  const logo = document.getElementById('logo');

  homeItem.addEventListener('click', renderTabs.homeTab);
  serviceItem.addEventListener('click', renderTabs.serviceTab);
  visitItem.addEventListener('click', renderTabs.visitTab);
  logo.addEventListener('click', renderTabs.homeTab);
});
