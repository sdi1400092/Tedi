// import Button from "./components/Button"
// import ListGroup from "./components/ListGroup"
// import Grid from "./components/Grid";
// import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Home from "./pages/Home";
import {BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar></Navbar>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
