import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <section className="hero-wrap hero-wrap-2"
        style="background-image: url('images/Swachh_vaarta_Eng_Landing_pge_banner.jpeg');"
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2"><span className="mr-2">
                <a href="index.html">Home <i className="fa fa-chevron-right"></i></a>
              </span> <span>Contact Us<i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="Contact">
          <div className="container row">

            <div className="col-md-12 col-lg-12 mb-4 mb-md-0 color boxes">

              <div className="block-23 mb-3">
                <p className="query">For any query related to Swachhata Mission please contact.</p>
                <ul>
                  <li> Jaipuria School of Bussiness,
                    Ghaziabad, Uttar Pradesh</li>
                  <li>6263802189</li>
                  <li>info@yourdomain.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section ftco-intro" style="background-image: url('images/Swachh_vaarta_Eng_Landing_pge_banner.jpeg');"
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Together we will explore new things</h2>
              <a href="" className="icon-video d-flex align-items-center justify-content-center"><span
                class="fa fa-play"></span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs