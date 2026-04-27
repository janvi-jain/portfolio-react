import hero from "/src/assets/images/cards.jpg";

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 order-2">
            <h1>Janhvi Jain</h1>
            <p>Turning concepts into code — building responsive websites.</p>
            <button className="btn contact-btn">Contact Me</button>
          </div>

          <div className="col-lg-6 order-1">
            <img src={hero} className="img-fluid rounded" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;