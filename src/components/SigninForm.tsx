function Eggrafi() {
  return (
    <>
      <div className="container col-3 p-4 align-items-center">
        <form>
          <div className="row mb-3">
            <label className="form-label" htmlFor="usrname">
              Όνομα Χρήστη
            </label>
            <div className="col-sm-10">
              <input type="username" id="usrname" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="form-label" htmlFor="password">
              Κωδικός
            </label>
            <div className="col-sm-10">
              <input type="password" id="password" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="form-label" htmlFor="password2">
              Επαλήθευση Κωδικού
            </label>
            <div className="col-sm-10">
              <input type="password" id="password2" className="form-control" />
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="enoikiastis"
            />
            <label className="form-check-label" htmlFor="enoikiastis">
              Ενοικιαστής
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="idioktitis"
            />
            <label className="form-check-label" htmlFor="idioktitis">
              Ιδιοκτήτης
            </label>
          </div>
          <button type="button" className="btn btn-primary mt-2">
            Εγγραφή
          </button>
          <div className="text-center m-3">
            <p>
              Είσαι ήδη Μέλος? <a href="./login.html">Συνδέσου</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Eggrafi;
