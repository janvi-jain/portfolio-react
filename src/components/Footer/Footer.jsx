import logo from "/src/assets/images/janvi-logo.png";
import instagram from "/src/assets/images/instagram.png";
import twitter from "/src/assets/images/twitter.png";
import github from "/src/assets/images/github-logo.png";
import linkedin from "/src/assets/images/linkedin.png";

function Footer() {

  const icons = [
    { img: instagram, name: "Instagram" },
    { img: twitter, name: "Twitter" },
    { img: github, name: "GitHub" },
    { img: linkedin, name: "LinkedIn" },
  ];

  return (
    <footer>
      <div class="container">
        <div class="row gy-lg-5 gy-3">
          <div class="col-lg-4 col-sm-6 order-1">
            <div>
              <div class="logo">
                <img src="" alt="janvi logo" width="70" height="60" class="mb-4" />
                <p class="copyright text-secondary fw-normal fs-6">
                  All rights reserved <span class="fw-bold">Codeefly</span> © 2025
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 order-lg-3 order-2">
            <div>
              <h4 class="fw-bold fs-3 mb-3 follow">Follow Me</h4>
              <ul class="list-unstyled d-flex gap-3 text-white fs-5 fw-bold icons">
                {icons.map((item) => (
                  <li><img src={item.img} alt={item.name} /></li>
                ))}
              </ul>
            </div>
          </div>

          <div class="col-lg-4  order-lg-2 order-3">
            <div>
              <h4 class="fw-bold fs-3 mb-3 newsletter">Newsletter</h4>
              <div class="row mb-3">
                <div class="col-sm-10">
                  <input type="email" class="form-control EMAIL-FORM" id="colFormLabel"
                    placeholder="Submit your email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="toparrow">
        <a href="#home" class="position-fixed bottom-0 end-0">
          <i class="ri-arrow-up-double-line"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;