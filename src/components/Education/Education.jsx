import Qualification from "./qualification";
console.log("read")
import eduImg from '/src/assets/images/education-img.jpg'
import wShape2 from '/src/assets/images/shape2-w.png'
import AOS from 'aos'
import { useEffect } from 'react'

function Education() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="p-5 mt-105" id="education">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <span className="title fs-3 fw-bold">Education</span>
              <h3 className="edu display-1 fw-bold">
                My Education
              </h3>
              <p className="text-secondary fs-5">
                Building a strong foundation in computer science and modern web development through
                academic study and practical training
              </p>
            </div>
            <Qualification />

          </div>

          <div className="col-lg-6 position-relative d-flex justify-content-center ">
            <div className="education-img mt-5" data-aos="fade-left" data-aos-duration="3000"
              data-aos-easing="linear">
              <img src={eduImg} alt="education-img" className="img-fluid rounded" />
            </div>
            <div
              className="position-absolute shape-w-1 animate__animated animate__bounce animate__infinite	infinite animate__slower	3s">
              <img src={wShape2} alt="W shape" />
            </div>
          </div>

          <div className="hr-line">

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;