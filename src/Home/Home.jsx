import React from 'react'
import Form from "../Form/Form";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import image01 from "./Images/01.jpg";
import image02 from "./Images/02.jpg";

const images = [
    {
        original: image01
    },
    {
        original: image02
    }
];

const Home = () => {
    return (
        <div>
            <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={6000}/>
        </div>
    )
}

export default Home
