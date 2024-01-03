import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

import AboutMain from "./Components/Header/About/AboutMain";
import Jntugv from "./Components/Header/About/JNTUGV/Jntugv";
import Training from "./Components/Header/About/Training/Training";
import Jobboard from "./Components/Header/About/Jobboard/Jobboard";
import Director from "./Components/Header/About/Director/Director";
import Visionmission from "./Components/Header/About/Visionmission/Visionmission";
import Recruiters from "./Components/Header/Recruiters/Recruiters";

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
          <Route path="about-training" element={<Training />} />
          <Route path="about-jobboard" element={<Jobboard />} />
          <Route path="about-director" element={<Director />} />
          <Route path="about-vision-mission" element={<Visionmission />} />
        </Route>
        <Route path="/our-recruiters" element={<Recruiters />} />

      </Routes>
    
    </div>
  );
}

export default App;
