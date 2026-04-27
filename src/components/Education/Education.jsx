function Education() {

  const data = [
    { title: "HSC", college: "Vanita Vishram", year: "2023-25" },
    { title: "BCA", college: "Vidhyadeep", year: "2025-28" },
    { title: "Full Stack", college: "Red & White", year: "2025-27" }
  ];

  return (
    <section id="education" className="mt-105">
      <div className="container">

        <h2>Education</h2>

        {data.map((item, i) => (
          <div key={i}>
            <h5>{item.title}</h5>
            <p>{item.college} ({item.year})</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;