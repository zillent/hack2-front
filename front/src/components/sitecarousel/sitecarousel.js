import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import './sitecarousel.css';

const SiteCarousel = (props) => {
    return (
        <div>
            
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>

                        <img className="d-block w-70" src='rem6.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-70" src='rem6.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-70" src='rem6.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        <img className="d-block w-70" src='rem6.jpg'/>
                    </Carousel.Item>
                    </Carousel>
            
        </div>
    );
}

export default SiteCarousel;