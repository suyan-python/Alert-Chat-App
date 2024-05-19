import "./App.css";
import "./index.css";
import PreLoader from "./components/PreLoader";
import Civil from "./components/departments/Civil";
import Computer from "./components/departments/Computer";
import Architect from "./components/departments/Architect";
import Faculties from "./components/faculty/Faculties";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import DarkMode from "./components/DarkMode/DarkMode";
import Verify from "./components/verification/Verify";
import SignUp from "./components/form/SignUp";
import TeacherDetails from "./components/teacher/TeacherDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App()
{
  const [verify, setVerify] = useState(false);

  if (verify === true)
  {
    return (
      <>
        {/* <PreLoader /> */}
        <div className="mx-28">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/faculty/Faculties" element={<Faculties />} />
              <Route exact path="/departments/Civil" element={<Civil />} />
              <Route
                exact
                path="/departments/Computer"
                element={<Computer />}
              />
              <Route
                exact
                path="/departments/Architect"
                element={<Architect />}
              />

              <Route
                exact
                path="/TeacherDetails"
                element={<TeacherDetails />}
              />

            </Routes>
          </Router>
        </div>
      </>
    );
  } else
  {
    return (
      <div className="Log flex-col justify-center text-center">

        <Router>
          <Routes>
            <Route exact path="/" element={<Verify />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/SignIn" element={<Form
              props={() =>
              {
                setVerify(true);
              }}
            />} />
          </Routes>
        </Router>


      </div>
    );
  }
}

export default App;
