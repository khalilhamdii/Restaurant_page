const Restaurant = (() => {
  const activeNav = (tabNbr) => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('active'));
    navItems[tabNbr].classList.add('active');
  };
  const renderHome = (img) => {
    const content = document.getElementById('tab');
    content.innerHTML = `
    <section class="page-section clearfix">
    <div class="container">
      <div class="intro"><img class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="${img}"
              style="border-radius: 5px;border-width: 1px;">
          <div class="intro-text left-0 text-centerfaded p-5 rounded bg-faded text-center">
              <h2 class="section-heading mb-4"><span class="section-heading-upper"><strong>OUR
                          PROMISE</strong><br></span><span class="section-heading-lower">TO YOU<br></span></h2>
              <p class="mb-3"><br>When you walk into our restaurant, we are dedicated to providing you with
                  friendly service, a welcoming atmosphere, and above all else, excellent products made with the
                  highest quality ingredients. If you are not satisfied, please let us know and we will do
                  whatever we can to make things right!<br></p>
          </div>
      </div>
    </div>
    </section>`;
    activeNav(0);
  };

  const renderService = (img1, img2, img3) => {
    const content = document.getElementById('tab');
    content.innerHTML = `
    <section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="d-flex product-item-title">
                <div class="d-flex mr-auto bg-faded p-5 rounded">
                    <h2 class="section-heading mb-0"><span class="section-heading-upper">Blended to
                            Perfection</span><span class="section-heading-lower">Coffees &amp; Teas</span></h2>
                </div>
            </div><img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                src="${img1}">
        </div>
    </div>
</section>
<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="d-flex product-item-title">
                <div class="d-flex ml-auto bg-faded p-5 rounded">
                    <h2 class="section-heading mb-0"><span class="section-heading-upper"><strong>DELICIOUS
                                TREATS</strong><br></span><span
                            class="text-break section-heading-lower">BreakfAst<br></span></h2>
                </div>
            </div><img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                src="${img2}">
        </div>
    </div>
</section>
<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="d-flex product-item-title">
                <div class="d-flex mr-auto bg-faded p-5 rounded">
                    <h2 class="section-heading mb-0"><span class="section-heading-upper">Good Eats</span><span
                            class="section-heading-lower">lunch &amp; dinNer</span></h2>
                </div>
            </div><img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                src="${img3}">
        </div>
    </div>
</section>`;
    activeNav(1);
  };

  const renderVisit = () => {
    const content = document.getElementById('tab');
    content.innerHTML = `
    <section class="page-section cta" style="background: transparent;">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto">
                <div class="cta-inner text-center rounded">
                    <h2 class="section-heading mb-5"><span class="section-heading-upper">Come On In</span><span
                            class="section-heading-lower">We're Open</span></h2>
                    <ul class="list-unstyled mx-auto list-hours mb-5 text-left">
                        <li class="d-flex list-unstyled-item list-hours-item">Sunday<span class="ml-auto"><em>7:00
                                    AM to 4:00 PM</em><br></span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Monday<span class="ml-auto">7:00 AM to
                                10:00 PM</span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Tuesday<span class="ml-auto">7:00 AM
                                to 10:00 PM</span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Wednesday<span class="ml-auto">7:00 AM
                                to 10:00 PM</span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Thursday<span class="ml-auto">7:00 AM
                                to 10:00 PM</span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Friday<span class="ml-auto">7:00 AM to
                                10:00 PM</span></li>
                        <li class="d-flex list-unstyled-item list-hours-item">Saturday<span class="ml-auto">9:00 AM
                                to 11:00 PM</span></li>
                    </ul>
                    <p class="address mb-5"><em><strong>7100 Boulifa</strong><span><br>El kef, Tunisia</span></em>
                    </p>
                    <p class="address mb-0"><small><em>Call Anytime</em></small><span><br>(+216)
                            97-337-588<br></span></p>
                </div>
            </div>
        </div>
    </div>
</section>`;
    activeNav(2);
  };
  return { renderHome, renderService, renderVisit };
})();

export default Restaurant;
