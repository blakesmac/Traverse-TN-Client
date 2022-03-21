import React, { useState } from "react";
import { Accordion, Carousel, Image } from "react-bootstrap";



export const HomePage = () => {

    return (

        <section className="homePage">
            <div className="homepage">
                <div className="homeLogo">
                
                </div>
            </div>
            <br />
            <div  className="carouselItem">
                <Carousel  fade variant="dark">
                    <Carousel.Item className="carouselContainer" >
                        <img 
                            
                            className="d-block w-100 carouselImage"
                            src="https://blog.inyourpocket.com/wp-content/uploads/2021/10/5-things-to-do-on-your-trip-to-tennessee-keith-harden-pixabay.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Welcome to TraverseTN!</h2>
                            <p className="whitetext" >Browse our States Beautiful Outdoor Locations</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer" >
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://felix-homes-assets.s3.us-east-2.amazonaws.com/large_moving_to_tennessee_0_8b14ac473b.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Plan a trip to your selected locations!</h2>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer" >
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_679022335.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className="whitetext" >Go outside, and enjoy the Tennessee Outdoors</h2>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <div className="accHome">
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About TraverseTN</Accordion.Header>
                        <Accordion.Body>
                        This application allows anyone to create a member account to browse our states wonderful rivers, and places.
                        Members are able to browse and check out other member accounts who have planned trips to each river and place!
                        With TraverseTN you will be able choose any river and place you would like, and plan a trip to your dream spot.
                        Any member can edit the trips and change any info they would like.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>



    )
}