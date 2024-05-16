import "./App.css";
import PreLoader from "./components/PreLoader";
import Civil from "./components/departments/Civil";
import Computer from "./components/departments/Computer";
import Architect from "./components/departments/Architect";
import Faculties from "./components/faculty/Faculties";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="mx-28">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faculty/Faculties" element={<Faculties />} />
            <Route exact path="/departments/Civil" element={<Civil />} />
            <Route exact path="/departments/Computer" element={<Computer />} />
            <Route
              exact
              path="/departments/Architect"
              element={<Architect />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
