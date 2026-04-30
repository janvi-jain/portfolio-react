import { useState } from "react";
import WorkCard from "./WorkCard";

import casinoImg from "/src/assets/images/casino_project.png";
import groceryImg from "/src/assets/images/e-groccery_project.png";
import primeImg from "/src/assets/images/prime-video_project.png";
import freshcartImg from "/src/assets/images/freshcart_project.png";
import netflixImg from "/src/assets/images/Netflix_project.png";
import sandboxImg from "/src/assets/images/sandbox_project.png";

function Portfolio() {

  const [active, setActive] = useState("All");

  const projects = [
    { id: 1, title: "Casino", img: casinoImg, link: "https://janvi-jain.github.io/casino/", category: "Development" },
    { id: 2, title: "E-Groccery", img: groceryImg, link: "https://janvi-jain.github.io/smart-mart/", category: "Web Design" },
    { id: 3, title: "Prime Video", img: primeImg, link: "https://janvi-jain.github.io/Prime-Video/", category: "Development" },
    { id: 4, title: "Freshcart", img: freshcartImg, link: "https://janvi-jain.github.io/Fresh-Cart/", category: "Web Design" },
    { id: 5, title: "Netflix", img: netflixImg, link: "https://janvi-jain.github.io/Netflix/", category: "Development" },
    { id: 6, title: "Sandbox", img: sandboxImg, link: "https://janvi-jain.github.io/sandbox-max-width", category: "Web Design" },
  ];

  const categories = ["All", "Web Design", "Development"];

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="mt-105 position-relative">
      <div className="container">
        <div className="text-center mb-4 ">
          <span className="title fw-bold fs-4">Portfolio</span>
          <h2 className="fw-bold display-2 edu mb-5">MY WORKS</h2>

          <ul className="justify-content-center mb-4 list-unstyled d-flex filter-menu work-menu">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`fw-bold fs-lg-5 ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
                style={{ cursor: "pointer" }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <WorkCard projects={filteredProjects} />
      </div>
    </section>
  );
}

export default Portfolio;