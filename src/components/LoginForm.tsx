function Sindesi() {
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
          <div className="row mb-4">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Θυμήσου με
                </label>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            Σύνδεση
          </button>
          <div className="text-center m-3">
            <p>
              Δεν είσαι μέλος? <a href="./signin.html">Κάνε εγγραφή</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sindesi;
