import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import './sitecarousel.css';

const SiteCarousel = (props) => {
    return (
        <section className="carousel">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>

                        </Carousel.Caption>
                        <img className="d-block w-100" src='/pics/glass-3097577_1920.jpg' alt="Очки" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>

                        </Carousel.Caption>
                        <img className="d-block w-100" src='/pics/glass-3097577_1920.jpg' alt="Очки" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>

                        </Carousel.Caption>
                        <img className="d-block w-100" src='/pics/glass-3097577_1920.jpg' alt="Очки" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default SiteCarousel;