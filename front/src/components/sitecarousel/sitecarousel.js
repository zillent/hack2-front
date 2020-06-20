import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import Container from "react-bootstrap/Container";
import './sitecarousel.css';

const SiteCarousel = (props) => {
    return (
        <div>
            
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>

                        <img className="d-block w-100" src='rem6.jpg' alt="Plate 1"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-100" src='rem6.jpg' alt="Plate 2"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-100" src='rem6.jpg' alt="Plate 3"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-100" src='rem6.jpg' alt="Plate 4"/>
                    </Carousel.Item>
                    </Carousel>
            
        </div>
    );
}

export default SiteCarousel;