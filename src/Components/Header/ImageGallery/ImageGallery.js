import React from "react";
import "./ImageGallery.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import image9 from "./Images/image9.jpg";
import image10 from "./Images/image10.jpg";
import image11 from "./Images/image11.jpg";
import image12 from "./Images/image12.jpg";
import image13 from "./Images/image13.jpg";
import image14 from "./Images/image14.jpg";
import image15 from "./Images/image15.jpg";
import image16 from "./Images/image16.jpg";
import image17 from "./Images/image17.jpg";
import image18 from "./Images/image18.jpg";
import image19 from "./Images/image19.jpg";
import image20 from "./Images/image20.jpg";
import image21 from "./Images/image21.jpg";
import image22 from "./Images/image22.jpg";
import image23 from "./Images/image23.jpg";
import image24 from "./Images/image24.jpg";
import image25 from "./Images/image25.jpg";
import image26 from "./Images/image26.jpg";
import image27 from "./Images/image27.jpg";
import image28 from "./Images/image28.jpg";
import image29 from "./Images/image29.jpg";
// import image30 from "./Images/image30.jpg";
// import image31 from "./Images/image31.jpg";
// import image32 from "./Images/image32.jpg";
// import image33 from "./Images/image33.jpg";
// import image34 from "./Images/image34.jpg";
import image35 from "./Images/image35.jpg";
import image36 from "./Images/image36.jpg";
import image37 from "./Images/image37.jpg";
import image38 from "./Images/image38.jpg";
// import image39 from "./Images/image39.jpg";
import image40 from "./Images/image40.jpg";
import image41 from "./Images/image41.jpg";
// import image42 from "./Images/image42.jpg";
import image43 from "./Images/image43.jpg";
import image44 from "./Images/image44.jpg";



const skillsData = [
    { name: '', image: image1 },
    { name: '', image: image2 },
    { name: '', image: image3 },
    { name: '', image: image4 },
    { name: '', image: image5 },
    { name: '', image: image6 },
    { name: '', image: image7 },
    { name: '', image: image8 },
    { name: '', image: image9 },
    { name: '', image: image10 },
    { name: '', image: image11 },
    { name: '', image: image12 },
    { name: '', image: image13 },
    { name: '', image: image14 },
    { name: '', image: image15 },
    { name: '', image: image16 },
    { name: '', image: image17 },
    { name: '', image: image18 },
    { name: '', image: image19 },
    { name: '', image: image20 },
    { name: '', image: image21 },
    { name: '', image: image22 },
    { name: '', image: image23 },
    { name: '', image: image24 },
    { name: '', image: image25 },
    { name: '', image: image26 },
    { name: '', image: image27 },
    { name: '', image: image28 },
    { name: '', image: image29 },
    // { name: '', image: image30 },
    // { name: '', image: image31 },
    // { name: '', image: image32 },
    // { name: '', image: image33 },
    // { name: '', image: image34 },
    { name: '', image: image35 },
    { name: '', image: image36 },
    { name: '', image: image37 },
    { name: '', image: image38 },
    // { name: '', image: image39 },
    { name: '', image: image40 },
    { name: '', image: image41 },
    // { name: '', image: image42 },
    { name: '', image: image43 },
    { name: '', image: image44 },
   
   
   
  
  ];
  
  const ImageGallery= () =>{
    return(
   <div>
   <div className="gallery-container">
    {skillsData.map((logo, index) => (
      <div className="gallery-card" key={index}>
        <img src={logo.image} alt={logo.name} className="gallery-image" />
        <h4>{logo.name}</h4>
      </div>
    ))}
  </div>

  

    
</div>


    );
}
export default ImageGallery;