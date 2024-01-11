import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutMain from "./Components/Header/About/AboutMain";
import Jntugv from "./Components/Header/About/JNTUGV/Jntugv";
// import Training from "./Components/Header/About/Training/Training";
import Jobboard from "./Components/Header/About/Jobboard/Jobboard";
import Director from "./Components/Header/About/Director/Director";
import Visionmission from "./Components/Header/About/Visionmission/Visionmission";
import Recruiters from "./Components/Header/Recruiters/Recruiters";
import PC from "./Components/Header/PC/PC";
import Studentsplacedmain from "./Components/Header/Studentsplaced/Studentsplacedmain";
import Twentytwo from "./Components/Header/Studentsplaced/Twentytwo/Twentytwo";
import Twentyone from "./Components/Header/Studentsplaced/Twentyone/Twentyone";
import Twenty from "./Components/Header/Studentsplaced/Twenty/Twenty";
import Nineteen from "./Components/Header/Studentsplaced/Nineteen/Nineteen";
import Eighteen from "./Components/Header/Studentsplaced/Eighteen/Eighteen";
import Notifications from "./Components/Header/Notifications/Notifications";
import Twentyfour from "./Components/Header/Studentsplaced/Twentyfour/Twentyfour";

function App() {
  return (
    <div>
     <div>
        <Header />
      </div>
 
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutMain />}>
          <Route path="about-jntugv" element={<Jntugv />} />
          {/* <Route path="about-training" element={<Training />} /> */}
          <Route path="about-jobboard" element={<Jobboard />} />
          <Route path="about-director" element={<Director />} />
          <Route path="about-vision-mission" element={<Visionmission />} />
        </Route>

        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/our-recruiters" element={<Recruiters />} />
        <Route path="/training-placement-cell" element={<PC />} />

        <Route path="/students-placed" element={<Studentsplacedmain />}>
          <Route path="twenty-four" element={<Twentyfour />} />
          <Route path="twenty-two" element={<Twentytwo />} />
          <Route path="twenty-one" element={<Twentyone />} />
          <Route path="twenty" element={<Twenty />} />
          <Route path="nineteen" element={<Nineteen />} />
          <Route path="eighteen" element={<Eighteen />} />
        </Route>
        <Route path="footer" element={<Footer />} />
      </Routes>
    
    </div>
  );
}

export default App;
