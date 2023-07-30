function SearchBar() {
  return (
    <>
      <div className="p-3 mb-2 my-2 bg-info-subtle text-emphasis-info w-50 container rounded border border-dark">
        <div className="input-group row row-cols-lg-auto g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="poli">Περιοχή/Πόλη</label>
            <input
              type="text"
              id="poli"
              className="form-control"
              // placeholder="Περιοχή/Πόλη"
              aria-label="Πόλη"
            ></input>
          </div>
          <div className="col-auto">
            <label htmlFor="apo">Από</label>
            <input
              type="date"
              id="apo"
              className="form-control"
              aria-label="apo"
            ></input>
          </div>
          <div className="col-auto">
            <label htmlFor="mexri">Μέχρι</label>
            <input
              type="date"
              id="mexri"
              className="form-control"
              aria-label="mexri"
            ></input>
          </div>
          <div className="col-auto">
            <label htmlFor="atoma">Άτομα</label>
            <input
              type="number"
              id="atoma"
              className="form-control"
              // placeholder="Περιοχή/Πόλη"
              aria-label="atoma"
            ></input>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" id="search">
              <a className="text-white" href="$">
                Αναζήτηση
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
