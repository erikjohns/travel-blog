import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter} from "react-icons/fa6";

const Carousel = () => {

    const carouselContent = [
        {
            img: "https://images.unsplash.com/photo-1632114448815-e03ae5b7dcc0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "Amalfi Coast",
            mainText: "T<span>he</span> <span>A</span>mal<span>f</span>i Coas<span>t</span>",
            subText: "The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy! Learn about where I stayed, what I did, and what I think you should do.",
        },
        {
            img: "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "Cliffs of Moher",
            mainText: "<span>Irel</span>a<span>nd</span></span>",
            subText: "The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy! Learn about where I stayed, what I did, and what I think you should do.",
        },
        {
            img: "https://images.unsplash.com/photo-1585414298822-bcfc1e276cc8?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAlt: "South of France",
            mainText: "<span>Côte d'Az</span>ur",
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
            <img src={carouselContent[currentIndex].img} alt={carouselContent[currentIndex].imgAlt}/>
            <div className="hero-text-container">
                <p>Featured Post</p>
                <h1 dangerouslySetInnerHTML={{ __html: carouselContent[currentIndex].mainText}}></h1>
                <h4>{carouselContent[currentIndex].subText}</h4>
                <button>Read More</button>
            </div>
            <div className="social-media-links">
                <a href={"https://www.instagram.com/erik_johns/"} target={"_blank"}
                   rel="noopener noreferrer"><FaInstagram color={"white"} className="icon"/></a>
                <a href={"https://twitter.com/erikjohns32"} target={"_blank"} rel="noopener noreferrer"><FaXTwitter
                    color={"white"} className="icon"/></a>
                <a href={"https://www.facebook.com/erik.johns.948/"} target={"_blank"}
                   rel="noopener noreferrer"><FaFacebookF color={"white"} className="icon"/></a>
            </div>
            <div className="dot-indicators">
                {carouselContent.map((_, index) => (
                    <span
                        key={index}
                        className={currentIndex === index ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}

export default Carousel;