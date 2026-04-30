import eduHat from "/src/assets/images/mortarboard.png";

function Qualification() {

  const data = [
    {id: 1, title: "Higher Secondary Education (H.S.C)", college: "Vanita Vishram", year: "(2023-2025)", parra: "Gained academic grounding and discipline that laid the foundation for my path in web development." },
    {id: 2, title: "Bachelor in Computer Science (BCA)", college: "Vidhyadeep University", year: "(2025-2028)", parra: "Building conceptual and technical knowledge through my undergraduate studies in computer science." },
    {id: 3, title: "Full Stack Web Developer", college: "Red & White Multimedia Institute", year: "(2025-2027)", parra: "Training in both the client-side and server-side of web development, with a focus on full project execution." }
  ];

  
  return (
      <div>
      {data.map((item) => (
        <div className="d-flex flex-row mt-5" key={item.id}>
          <div className="edu-hat">
            <img src={eduHat} alt="Education Hat" />
          </div>

          <div className="qualification">
            <h5 className="ms-3 fw-bold fs-4">{item.title}</h5>

            <h6 className="ms-3 fw-bold fs-5">
              {item.college}
              <span className="text-secondary fs-6">{item.year}</span>
            </h6>

            <p className="ms-3 text-secondary">{item.parra}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Qualification;