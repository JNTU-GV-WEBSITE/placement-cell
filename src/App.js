import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutMain from "./Components/Header/About/AboutMain";
import Jntugv from "./Components/Header/About/JNTUGV/Jntugv";
// import Training from "./Components/Header/About/Training/Training";
import Jobboard from "./Components/Header/About/Jobboard/Jobboard";
import IIIT from "./Components/Header/About/IIIT/IIIT";
import Director from "./Components/Header/About/Director/Director";
import Visionmission from "./Components/Header/About/Visionmission/Visionmission";
import ImageGallery from "./Components/Header/ImageGallery/ImageGallery";
import Recruiters from "./Components/Header/Recruiters/Recruiters";
import PC from "./Components/Header/PC/PC";
import Studentsplacedmain from "./Components/Header/Studentsplaced/Studentsplacedmain";
import Twentyfour from "./Components/Header/Studentsplaced/Twentyfour/Twentyfour";
import Twentytwo from "./Components/Header/Studentsplaced/Twentytwo/Twentytwo";
import Twentyone from "./Components/Header/Studentsplaced/Twentyone/Twentyone";
import Twenty from "./Components/Header/Studentsplaced/Twenty/Twenty";
import Nineteen from "./Components/Header/Studentsplaced/Nineteen/Nineteen";
import Eighteen from "./Components/Header/Studentsplaced/Eighteen/Eighteen";
import Seventeen from "./Components/Header/Studentsplaced/Seventeen/Seventeen";
import Sixteen from "./Components/Header/Studentsplaced/Sixteen/Sixteen";
import Notifications from "./Components/Header/Notifications/Notifications";
import Twentythree from "./Components/Header/Studentsplaced/Twentythree/Twentythree";
import Contactus from "./Components/Header/Contactus/Contactus";
import About from "./Components/Header/PC/About/About";
import Activities from "./Components/Header/PC/Activities/Activities";
import Services from "./Components/Header/PC/Services/Services";
import Staff from "./Components/Header/About/Staff/Staff";

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
          <Route path="about-jobboard" element={<Jobboard />} />
          <Route path="about-iiit-placements" element={<IIIT />} />
          <Route path="about-director" element={<Director />} />
          <Route path="about-supporting-staff" element={<Staff />} />
          <Route path="about-vision-mission" element={<Visionmission />} />
        </Route>


        <Route path="/pc" element={<PC />}>
          <Route path="about-placement" element={<About />} />
          <Route path="about-activities" element={<Activities />} />
          <Route path="about-services" element={<Services />} />
        </Route>

        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/our-recruiters" element={<Recruiters />} />
        <Route path="/our-image-gallery" element={<ImageGallery />} />
        {/* <Route path="/training-placement-cell" element={<PC />} /> */}
        <Route path="/about-contact-us" element={<Contactus />} />

        <Route path="/students-placed" element={<Studentsplacedmain />}>
          <Route path="twenty-four" element={<Twentyfour />} />
          <Route path="twenty-three" element={<Twentythree />} />
          <Route path="twenty-two" element={<Twentytwo />} />
          <Route path="twenty-one" element={<Twentyone />} />
          <Route path="twenty" element={<Twenty />} />
          <Route path="nineteen" element={<Nineteen />} />
          <Route path="eighteen" element={<Eighteen />} />
          <Route path="seventeen" element={<Seventeen />} />
          <Route path="sixteen" element={<Sixteen />} />
        </Route>
        {/* <Route path="footer" element={<Footer />} />  */}
      </Routes><br /><br />
      <Footer />
    
    </div>
  );
}

export default App;