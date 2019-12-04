import React from 'react'

import Form from "../Form/Form";
import styles from './Home.module.css';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import image01 from "./Images/01.jpg";
import image02 from "./Images/02.jpg";
import videobg from "./Images/videobg.jpg";

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
        <div styles="width: 100%;">
            <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={6000} />
            <div className={styles.container} style={{ backgroundImage: `url(${videobg})` }}>
                <div className={styles.video}>
                    <iframe width="960" height="540"
                        src="https://www.youtube.com/embed/xLK-h3TB2ds"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <br />
                    <h1 className={styles.font}>View the newest patch note in Base Race</h1>
                    <br />
                    <button className={styles.button} onClick={() => { window.location.href = '/NewsPage' }}>Start</button>
                </div>
            </div>

        </div>
    )
}

export default Home
