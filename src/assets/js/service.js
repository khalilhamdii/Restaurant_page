const Service = (() => {
  const renderService = (img1, img2, img3) => {
    const content = document.getElementById("tab");
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
  };
  return { renderService };
})();

export default Service;
