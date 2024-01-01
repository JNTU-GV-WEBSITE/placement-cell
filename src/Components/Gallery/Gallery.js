import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="mianDivIG">
      <div className="mainImageGallery">
        <Carousel fade>
          <Carousel.Item>
            <img className="image" src={image1} alt="First slide" />
            <Carousel.Caption>
              <div className="carouselText">
            
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={image3} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
              
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={image4} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" src={image5} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" src={image6} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={image7} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={image8} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
               
              </div>
            </Carousel.Caption>
          </Carousel.Item>



        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
