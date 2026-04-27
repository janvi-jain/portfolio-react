function WorkCard({ img, title, link }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="work-item overlay position-relative d-flex justify-content-center">

        <img src={img} className="img-fluid rounded" />

        <h4 className="text-white">{title}</h4>

        <span className="external-link">
          <a href={link} target="_blank">
            <i className="ri-external-link-line"></i>
          </a>
        </span>

      </div>
    </div>
  );
}

export default WorkCard;