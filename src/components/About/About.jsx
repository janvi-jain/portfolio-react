import aboutImg from '/src/assets/images/about-img.jpg'
import yellowShadow from '/src/assets/images/about-yellow-shadow.png'
import blueShadow from '/src/assets/images/about-blue-shadow.png'
import wShape from '/src/assets/images/shape2-w.png'
import signature from '/src/assets/images/signature.png'
import AOS from 'aos'
import { useEffect } from 'react'

function About() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section id="about" className="py-lg-5 py-3 mt-105 position-relative">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 mb-lg-4">
                        <div className="blue-box" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
                        </div>
                        <div className="green-box" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
                        </div>

                        <div className="photo-wrapper animation-line position-relative about-img d-flex justify-content-center"
                            data-aos="fade-right" data-aos-duration="3000" data-aos-easing="linear">

                            <img src={aboutImg} width="75%" alt="Me" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text position-relative">
                            <span className="fs-5 fw-bold">About Me</span>
                            <h3 className="fw-bolder mb-3 display-4 about-title">I Develop Systems that Work</h3>

                            <div
                                className="position-absolute shape-w animate__animated animate__bounce animate__infinite	infinite animate__slower	3s">
                                <img src={wShape} alt="w shape" />
                            </div>

                            <p className="text-muted about-parra mb-4">
                                I'm Janvi Jain, a developer with experience across the full web stack. My approach is
                                rooted in writing clean,maintainable code, optimizing for performance, and creating
                                seamless user experiences using tools like HTML, CSS, JavaScript, and modern frameworks.
                            </p>
                            <p className="text-muted mb-4">
                                I develop responsive, user-first interfaces and solid architecture.
                                Always learning, always improving the craft of web development.
                            </p>
                        </div>
                        <div className="row about-menu">
                            <div className="col-sm-6">
                                <p><strong>Name:</strong> Jain Janhvi</p>
                                <p><strong>Age:</strong> 17 Years</p>
                                <p><strong>Occupation:</strong> Full Stack Devloper</p>
                                <p><strong>Education:</strong>12<sup>th</sup> Passed</p>
                            </div>
                            <div className="col-sm-6">
                                <p><strong>Phone:</strong>+91 9429062463</p>
                                <p><strong>Email:</strong> pariijain007@gmail.com</p>
                                <p><strong>Nationality:</strong> Indian</p>
                                <p><strong>Freelance:</strong> Available</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <img src={signature} alt="my signature" width="30%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute about-bg-yellow">
                <img src={yellowShadow} alt="YELLOW SHADOW" />
            </div>
            <div className="position-absolute about-bg-blue">
                <img src={blueShadow} alt="BLUE SHADOW" />
            </div>
        </section>
    );
}

export default About;