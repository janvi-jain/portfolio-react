function Footer() {

  const icons = [
    "ri-instagram-line",
    "ri-twitter-fill",
    "ri-linkedin-fill",
    "ri-github-fill"
  ];

  return (
    <footer>
      <div className="container text-center">

        <ul className="d-flex justify-content-center gap-3">
          {icons.map((icon, i) => (
            <li key={i}>
              <i className={icon}></i>
            </li>
          ))}
        </ul>

        <p>© 2025 Janvi</p>

      </div>
    </footer>
  );
}

export default Footer;