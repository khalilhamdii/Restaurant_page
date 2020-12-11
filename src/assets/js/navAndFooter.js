const NavFooter = (() => {
  const renderHeader = () => {
    const header = document.getElementById('header');
    const element = document.createElement('h1');
    element.classList.add(
      'text-center',
      'text-white',
      'd-none',
      'd-lg-block',
      'site-heading',
    );
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.innerText = 'Restaurant & tea Room';
    span2.innerText = 'RAYHANA';
    span1.classList.add(
      'text-primary',
      'site-heading-upper',
      'mb-3',
      'font-weight-bold',
    );
    span2.classList.add('site-heading-lower');
    element.appendChild(span1);
    element.appendChild(span2);
    header.appendChild(element);
  };

  const renderNav = () => {
    const content = document.getElementById('nav');
    content.innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-lg sticky-top py-lg-4" id="mainNav"
    style="background: rgba(230,167,86,0.95);">
    <div class="container"><a id="logo" class="navbar-brand text-monospace text-capitalize d-lg-none text-expanded"
        data-bs-hover-animate="pulse"
        style="color: rgb(255,255,255);font-size: 25px;font-family: Raleway, sans-serif;border-style: none;border-right-style: none;border-bottom-style: none;">Rayhana</a><button
        data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" data-bs-hover-animate="pulse"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
        style="border-style: none;border-color: rgba(255,255,255,0.5);"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link" data-bs-hover-animate="pulse" id="home">Home</a>
          </li>
          <li class="nav-item"><a class="nav-link" data-bs-hover-animate="pulse" id="service">Service</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-hover-animate="pulse" id="visit-us">Visit
              us</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
  };

  const renderFooter = () => {
    const content = document.getElementById('footer');
    content.innerHTML = `
    <footer class="footer text-faded text-center py-5" style="background: rgb(0,0,0);">
    <div class="container">
      <p class="m-0 small" style="font-size: 15px;">Copyright&nbsp;©&nbsp;Rayhana Restaurant&nbsp; 2020</p>
    </div>
  </footer>`;
  };
  return { renderNav, renderHeader, renderFooter };
})();

export default NavFooter;
