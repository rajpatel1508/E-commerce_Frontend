import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import './style.css';
import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.webp';
import img5 from '../../images/img5.webp';
import img6 from '../../images/img6.webp';
import img7 from '../../images/img7.webp';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowBack } from 'react-icons/io';

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
    ];

    const handlePreviousClick = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex === images.length ? 0 : newIndex);
    };
    // Set an interval to automatically change the image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextClick();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <Layout>
            <div className='carousel-container'>
                <img className='carousel' src={images[currentIndex]} />
                <button className='carousel-button previous-button' onClick={handlePreviousClick}> <IoIosArrowBack/> </button>
                <button className='carousel-button next-button' onClick={handleNextClick}> <IoIosArrowForward/> </button>
            </div>
            <div className="homebanner">
                <div className="bannerimg">
                    <video controlsList="nodownload" preload="true" playsInline autoPlay loop muted disablePictureInPicture poster="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/amazon-clone/banner_video.webp?format=webp">
                        <source src="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/amazon-clone/banner_video.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="banner-text">
                    <h1>E-Bazaar</h1>
                    <p className="my-3 my-xl-3">This project is a E-commerce website similar to the popular e-commerce platform Flipkart, developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                        It features a user-friendly interface and allows users to browse and purchase products, create and manage their own accounts and more.
                        The use of the MERN stack allows for efficient and scalable development, with MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment.
                        The project is aimed at providing a similar functionality as Flipkart and the users will be able to have a similar experience as Flipkart.</p>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="aboutin text-sm-start text-center">
                        <h2 className="mt-3 mb-3">Why E-Commerce?</h2>
                        <p>E-bazaar is similar to Flpkart. Flipkart is one of the best and trending eCommerce sites with a presence throughout India. The online shopping website is for Buying and Selling products online within the network.</p>
                        <p>E-bazaar is to showcase FullStack skills of mine as it requires rigorous implementation of multiple complex functionalities.</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy;2023 E-BAZAAR</p>
            </footer>
        </Layout>
    )
}
