import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Magnifier from "react-magnifier";
// import ReactImageMagnify from 'react-image-magnify';


const Viewer = () => {

    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
    ]

    return (
        <Carousel
            emulateTouch
            swipeable
            infiniteLoop
        >
            {
                images.map((image, index) => {
                    return (


                        <div key={index}>
                            <img
                                src={require(`./assets/${image}`)}
                                alt="One"

                            />
                        </div>
                    )
                }
                )
            }
        </Carousel>

    )
}

export default Viewer

