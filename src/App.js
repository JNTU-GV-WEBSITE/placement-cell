import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMain from "./Components/Header/About/AboutMain";
import Jntugv from "./Components/Header/About/JNTUGV/Jntugv";
import Jobboard from "./Components/Header/About/Jobboard/Jobboard";
import Training from "./Components/Header/About/Training/Training";
import Mission from "./Components/Header/About/Mission/Mission";
import Vision from "./Components/Header/About/Vision/Vision";

function App() {
  return (
    <div>
     <div>
        <Header />
      </div>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutMain />}>
          <Route path="about-mission" element={<Mission />} />
          <Route path="about-jntugv" element={<Jntugv />} />
          <Route path="about-jobboard" element={<Jobboard />} />
          <Route path="about-training" element={<Training />} />
          <Route path="about-vision" element={<Vision />} />
        </Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
