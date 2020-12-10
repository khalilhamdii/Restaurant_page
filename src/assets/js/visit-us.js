const Visit = (() => {
  const renderVisit = () => {
    const content = document.getElementById("tab");
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
  };
  return { renderVisit };
})();

export default Visit;
