const Home = (() => {
  const renderHome = (img) => {
    const content = document.getElementById("tab");
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
              <div class="mx-auto intro-button"><a class="btn btn-primary d-inline-block mx-auto btn-xl"
                      role="button" href="visit-us.html">Visit Us Today!</a></div>
          </div>
      </div>
    </div>
    </section>`;
  };
  return { renderHome };
})();

export default Home;
