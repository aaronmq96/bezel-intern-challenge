import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../styles/image-viewer.css'

const ImageViewer = () => {

    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
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
                                src={require(`../../public/assets/${image}`)}
                                alt={image}
                            />
                        </div>
                    )
                }
                )
            }
        </Carousel>

    )
}

export default ImageViewer

