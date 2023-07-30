import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
// import Map from "../components/Osm";

function Home() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <Grid
          header="Δημοφιλή Καταλύματα"
          items={[
            "volos",
            "larisa",
            "mukonos",
            "koukaki",
            "kalamata",
            "karpenisi",
          ]}
        ></Grid>
      </div>
    </>
  );
}

export default Home;
