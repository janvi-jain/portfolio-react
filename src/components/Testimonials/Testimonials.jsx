import AOS from 'aos'
import Swipper from './Swipper'
import { useEffect } from 'react'
import testimonialsImg from '/src/assets/images/testimonials-img.jpg'
import comma from '/src/assets/images/review-comma.png'
function Testimonials() {

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className="mt-105" id="Testimonials">
      <div className="container bg-blue rounded-2">
        <div className="row">
          <div className="col-lg-6 px-4">
            <div>
              <span className="title fs-3 fw-normal">Testimonials</span>
              <h2 className="fw-bold edu display-2 mb-4 fw-bold">What People Say</h2>
            </div>
            <div className="d-flex">
              <div className="inverted-comma">
                <img src={comma} alt="Inverted Comma" className="img-fluid" />
              </div>
              <Swipper/>
            </div>
          </div>

          <div className="col-lg-6 mt-5 ">
            <div data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear">
              <img src={testimonialsImg} alt="inverted-comma" className="pt-4 ps-3" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
