import CircleProgress from "./CircleProgress";

function SkillRight() {
  const data = [
    { id: 1, title: "HTML", percentage: 90 },
    { id: 2, title: "CSS", percentage: 95 },
    { id: 3, title: "Responsive Web Design", percentage: 85 },
  ];

  return (
    <div className="col-lg-6">
      <div className="row justify-content-center align-items-center">

        {data.map((item) => (
          <div className="col-md-4 col-sm-6 text-center" key={item.id}>
            <CircleProgress
              percentage={item.percentage}
              title={item.title}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default SkillRight;