import React from 'react'
import Slider from 'react-slick';
import {Card} from 'react-bootstrap';

const Evidences = () => {

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const buildCards = () => {
        return (
            <Card style={{margin: 'auto 1em'}}>
                <Card.Img variant="top" src="https://via.placeholder.com/150"/>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div style={{margin: '30px'}}>
            <h2> Single Item</h2>
            <Slider {...settings} >
                {buildCards()}
                {buildCards()}
                {buildCards()}
                {buildCards()}
                {buildCards()}
                {buildCards()}
                {buildCards()}
            </Slider>
        </div>
    );
}

export default Evidences