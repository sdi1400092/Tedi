import Grid from "../components/Grid";
import Navbar from "../components/Navbar";

function Appartments() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Grid
          header="Τα Διαμερίσματά μου"
          items={[
            "volos",
            "larisa",
            "karpenisi",
          ]}
        />
      </div>
    </>
  );
}

export default Appartments;
