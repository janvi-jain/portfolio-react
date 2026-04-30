function WorkCard({ projects }) {
  return (
    <div className="container mt-5">
      <div className="row gx-5 gy-lg-5 gy-sm-3 gy-2">

        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 mb-lg-5" key={project.id}>
            <div className="work-item overlay position-relative d-flex justify-content-center">

              <img src={project.img} alt={project.title} className="img-fluid rounded" />

              <h4 className="text-white fs-4 fw-semibold z-3">
                {project.title}
              </h4>

              <span className="external-link">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <i className="ri-external-link-line"></i>
                </a>
              </span>

              <span className="eye-link">
                <a href={project.img} data-fancybox="gallery">
                  <i className="ri-eye-line"></i>
                </a>
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default WorkCard;