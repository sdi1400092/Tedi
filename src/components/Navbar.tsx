function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="src\assets\rent.svg"
              width="50"
              height="34"
              className="d-inline-block align-text-top"
              alt=""
            ></img>
            Booking
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="../search.html">
                Δωμάτια
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../appartments.html">
                Τα Διαμερίσματά μου
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../reservations.html">
                Οι κρατήσεις μου
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../info.html">
                Πληροφορίες
              </a>
            </li>
            <button className="btn btn-link">
              <a href="../signin.html">Εγγραφή</a>
            </button>
            <button className="btn btn-primary">
              <a className="text-white" href="../login.html">Σύνδεση</a>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
