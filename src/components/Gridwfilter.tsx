import ListGroup from "./ListGroup";

interface Props {
  header: string;
  items: string[];
}

const GridwFilter = ({ header, items }: Props) => {
  return (
    <>
      <h3 className="p-2">{header}</h3>
      <div className="row p-3 mt-3">
        <div className="col-3">
          <form>
            <div className="row mb-3">
              <label htmlFor="perioxi" className="col-sm-2 col-form-label">
                Περιοχή
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="perioxi"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="apo"
                className="col-sm-2 col-form-label"
              >
                Από
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="apo"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="mexri"
                className="col-sm-2 col-form-label"
              >
                Μέχρι
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="mexri"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="atoma"
                className="col-sm-2 col-form-label"
              >
                Άτομα
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="atoma"
                ></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" id="search">
              <a className="text-white" href="$">
                Αναζήτηση
              </a>
            </button>
          </form>
        </div>
        <div className="col-8">
          <div className="row row-cols-4 mx-3">
            {items.map((item) => (
              <div className="col border m-1">
                <ListGroup
                  link="$"
                  header={item}
                  items={["Τοποθεσια:", "Κόστος ανά βράδυ:", "Αριθμός Ατόμων:"]}
                ></ListGroup>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GridwFilter;
