import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6";

const Carousel = () => {

    const carouselContent = [
        {
            img: "https://images.unsplash.com/photo-1632114448815-e03ae5b7dcc0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "Amalfi Coast",
            mainText: "The Amalfi Coast",
            subText: "The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy! Learn about where I stayed, what I did, and what I think you should do.",
        },
        {
            img: "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "Cliffs of Moher",
            mainText: "Ireland",
            subText: "The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy! Learn about where I stayed, what I did, and what I think you should do.",
        },
        {
            img: "https://images.unsplash.com/photo-1585414298822-bcfc1e276cc8?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "South of France",
            mainText: "The French Riviera",
            subText: "The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy! Learn about where I stayed, what I did, and what I think you should do.",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [carouselContent.length]);

    return (
        <div className="hero-container">
            <img src={carouselContent[currentIndex].img} alt={carouselContent[currentIndex].imgAlt} />
            <div className="hero-text-container">
                <p>Latest Post</p>
                <h1>{carouselContent[currentIndex].mainText}</h1>
                <h4>{carouselContent[currentIndex].subText}</h4>
                <button>Read More</button>
            </div>
            <div className="social-media-links">
                <FaInstagram color={"white"} className="icon" />
                <FaXTwitter color={"white"} className="icon" />
                <FaFacebook color={"white"} className="icon" />
            </div>
        </div>
    )
}

export default Carousel;