import GridwFilter from "../components/Gridwfilter";
import Navbar from "../components/Navbar";
import Map from "../components/Osm";

function Search() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="row p-3 mt-3 w-100">
        <div className="col-8">
          <GridwFilter
            header="Αποτελέσματα Αναζήτησης"
            items={[
              "volos",
              "larisa",
              "mukonos",
              "koukaki",
              "kalamata",
              "karpenisi",
            ]}
          ></GridwFilter>
        </div>
        <div className="col-4">
          <Map
            coords={[
              [37.9411, 23.75249, "spiti mou"],
              [37.93599, 23.75199, "spiti gianni"],
              [37.93815, 23.75736, "nisaki"],
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
