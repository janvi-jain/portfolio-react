function Contact() {

  const navItems = [
    {id: 1, name: "Location", icon: <i class="ri-map-pin-2-fill"></i>, value: "Surat,Gujarat" },
    {id: 2, name: "Phone", icon: <i class="ri-phone-fill"></i>, value: "+91 94290 62463" },
    {id: 3, name: "Email", icon: <i class="ri-mail-fill"></i>, value: "Pariijain007@gmail.com" },
  ];

  return (
    <section id="contact" className="mt-105">
      <p className="title text-center fs-4 fw-normal">Contact Me</p>
      <h2 className="edu text-center display-2 fw-bold mb-xl-2 mb-4">Let’s Start A New Project</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {navItems.map((item) => (
              <div className="contact-details d-flex mb-2" key={item.id}>
                <div className="contact-img mb-3">
                  {item.icon}
                </div>
                <div className="flex-column ms-4">
                  <h4 className="fw-bold fs-4">{item.name}</h4>
                  <p className="text-secondary fs-6 fw-normal">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <form className="row g-3 mt-xl-0 mt-md-4 mt-3">
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input type="email" className="form-control input-text" id="inputEmail4"
                  placeholder="Your Name" />
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input type="password" className="form-control input-text" id="inputPassword4"
                  placeholder="Your Email" />
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input type="email" className="form-control input-text" id="inputEmail4"
                  placeholder="your Phone" />
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input type="password" className="form-control input-text" id="inputPassword4"
                  placeholder="Your Subject" />
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-duration="2000">
                <textarea id="message" name="message" rows="5" cols="50" className="form-control input-text"
                  placeholder="Start writing message here"></textarea>
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-duration="2000">
                <button type="submit" className="btn submit-btn fw-bold">submit now</button>
              </div>
            </form>
          </div>
          <iframe className="mt-5" data-aos="fade-up" data-aos-duration="3000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.67288580257!2d72.65746993675346!3d21.159440568354555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1753163538056!5m2!1sen!2sin"
            width="800" height="300" style={{ border: "0" }} loading="lazy" allowFullScreen frameBorder="0" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;