import hero from "/src/assets/images/cards.jpg";
import queenImg from "/src/assets/images/queen-shape.png";

function Home() {
  const navItems = [
    { name: "instagram", link: <i class="ri-instagram-line"></i> },
    { name: "twitter", link: <i class="ri-twitter-fill"></i> },
    { name: "linkdin", link: <i class="ri-linkedin-fill"></i> },
    { name: "github", link: <i class="ri-github-fill"></i> },
  ];

  return (
    <section id="home">
      <div className="container">
        <div className="row">

          <div className ="col-lg-6 position-relative order-lg-1 order-2">
            <div className ="banner-text banner-bg">
              <div className ="col-lg-10 col-md-9">
                <div className ="slider-content z-1 pt-5">
                  <h1>Janhvi Jain</h1>
                  <p className ="mt-4">Turning concepts into code — building responsive, elegant, and
                    efficient
                    websites.
                  </p>
                  <div className ="d-flex gap-3 mt-4 justify">
                    <button className ="btn contact-btn">Contact Me</button>
                  </div>
                </div>
              </div>
            </div>
            <div className ="position-absolute shape-queen animate__animated animate__bounce animate__infinite	infinite animate__slower	3s">
              <img src={queenImg} alt="queen shape" />
            </div>
          </div>

          <div className ="col-lg-6 position-relative order-lg-2 order-1">
            <img src={hero} alt="Jain Janhvi" className ="img-fluid rounded" />
          </div>



        </div>
      </div>

      <div className ="social-icons d-lg-flex flex-column position-absolute top-50 end-0 translate-middle-y pe-3">
        <ul className ="list-unstyled icon">
          {navItems.map((item) => (
              <li key={item.name} className ="text-black fs-3 mb-3 p-1">
                {item.link}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;