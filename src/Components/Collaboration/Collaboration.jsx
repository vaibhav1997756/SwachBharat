// import React from 'react';
// import { PDFExport } from '@progress/kendo-react-pdf';
// import './Collaboration.css'

// const Collaboration = () => {
//   const pdfExportComponent = React.useRef(null);

//   const exportPDFWithComponent = () => {
//     if (pdfExportComponent.current) {
//       pdfExportComponent.current.save();

//     }
//   };

//   return (
//     <div>

//       <PDFExport ref={pdfExportComponent} paperSize="A4">
//         <div style={{ maxHeight: '100vh', marginLeft: '10px' }} className='font'>
//           <div field="ProductID" title="ID" width="50px">

//             <div className='list'>
//               <h2>Annexure-4</h2>
//               <h3>Resources on Future Skills & Future of Education (Research & Knowledge Papers)</h3>

//               <p>I.<a href="https://portal.am/wp-content/uploads/2021/08/PortalAM_Web-3-Report-1.pdf">https://portal.am/wp-content/uploads/2021/08/PortalAM_Web-3-Report-1.pdf</a></p>
//               <p>II.<a href="https://www.solacve.com/wp-content/uploads/2022/03/Report-An-Introducon-to-Web-3.0.pdf">https://www.solacve.com/wp-content/uploads/2022/03/Report-An-Introducon-to-Web-3.0.pdf</a></p>
//               <p>III.<a href="https://www.goldmansachs.com/insights/pages/gs-research/framing-the-future-of-web-3.0-metaverseedion/report.pdf">https://www.goldmansachs.com/insights/pages/gs-research/framing-the-future-of-web-3.0-metaverseedion/report.pdf</a></p>
//               <p>IV.<a href=" https://www.academia.edu/39468575/Web_3_0_The_New_Era_of_Data">https://www.academia.edu/39468575/Web_3_0_The_New_Era_of_Data</a></p>
//               <p>V.<a href="https://www.hindawi.com/journals/edri/2022/6503139/">https://www.hindawi.com/journals/edri/2022/6503139/</a></p>



//             </div>
//           </div>
//         </div>

//       </PDFExport>
//       <button onClick={exportPDFWithComponent} style={{ marginTop: '10px' }}>Export to PDF</button>
//     </div>
//   );
// };



// export default Collaboration;



import React from 'react'

const Collaboration = () => {
  return (
    <div>
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md d-flex align-items-center">
              <p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span className="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
            </div>
            <div className="col-12 col-md d-flex justify-content-md-end">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="hero-wrap hero-wrap-2" style="background-image: url('images/DSC_1303.JPG');" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-3">
              <p className="breadcrumbs mb-2"><span className="mr-2">

              </span> <span>Callaboration<i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Collaboration</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">

              <span className="subheading mb-3">Seth Anandram Jaipuria Group of Institutions</span>

            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">

                  <h4 className="heading-2">Guidlines</h4>




                  <a href="guidlines.html" className="btn btn-primary px-3 py-2">Open</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7 active">
                <div className="text-center">

                  <h4 className="heading-2">Technical Notes/Manual</h4>




                  <a href="technicalnotes.html" className="btn btn-primary px-3 py-2">Open</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">

                  <h4 className="heading-2">Studies and Surveys</h4>




                  <a href="studies.html" className="btn btn-primary px-3 py-2">Open</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">

                  <h4 className="heading-2">Circulers</h4>
                  <a href="circulers.html" className="btn btn-primary px-3 py-2">Open</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collaboration