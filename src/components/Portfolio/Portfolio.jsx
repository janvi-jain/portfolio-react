import { useState } from "react";
import WorkCard from "./WorkCard";

function Portfolio() {

  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: "/src/assets/images/casino_project.png",
      title: "Casino",
      category: "Web",
      link: "https://janvi-jain.github.io/casino/"
    },
    {
      img: "/src/assets/images/e-groccery_project.png",
      title: "E-Grocery",
      category: "Web",
      link: "#"
    },
    {
      img: "/src/assets/images/Netflix_project.png",
      title: "Netflix",
      category: "Design",
      link: "#"
    }
  ];

  const categories = ["All", "Web", "Design"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="mt-105">
      <div className="container">

        <h2 className="text-center">MY WORKS</h2>

        <ul className="d-flex justify-content-center gap-3">
          {categories.map((cat, i) => (
            <li key={i} onClick={() => setFilter(cat)}>
              {cat}
            </li>
          ))}
        </ul>

        <div className="row mt-4">
          {filtered.map((item, i) => (
            <WorkCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;