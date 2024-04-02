import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import FeaturedDestinations from "./Components/FeaturedDestinations";
import Footer from "./Components/Footer";
import {FaArrowRight} from "react-icons/fa6";
import WorldMap from "./Components/WorldMap";

const Homepage = () => {

    /*
    document.querySelector('.newsletter-form-submit').addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.querySelector('form').classList.add('done');
    })
     */

    return (
        <div className="homepage">
            <Navbar />
            <Carousel />
            <div className="homepage-featured-section">
                <div className="inner-text-section">
                    <h4>Some of My Favorites</h4>
                    <h1>Ge<span>t</span> Inspi<span>red</span></h1>
                    <p>Read about some of my trips and see if they sound appealing to you.</p>
                </div>
                <FeaturedDestinations />
            </div>

            <div className="newsletter-form">
                <h1>
                    W<span>a</span>n<span>t to</span> S<span>t</span>a<span>y in</span> t<span>h</span>e <span>K</span>now?
                </h1>
                <p>Subscribe to my newsletter below to get notified about any new posts I make.</p>
                <form>
                    <input type="email" id="newsletter" className="newsletter-form-input" placeholder="Enter your email" />
                    <button type="submit" className="newsletter-form-submit">
                        <span className="before-submit"><FaArrowRight color={"white"}/></span>
                        <span className="after-submit">Thanks for Subscribing!</span>
                    </button>
                </form>
            </div>

            <div className="destination-map-container">
                <WorldMap />
                <div className="map-text-container">
                    <div className="top-container">
                        <h1><span>Des</span>t<span>in</span>a<span>t</span>ion<span>s</span></h1>
                        <p>See the destinations I've been to! Each and every one of them has their own unique flare. Click on a pin to learn more about the location.</p>
                    </div>
                    <div className="bottom-container">
                        <p>Want to see the map in full screen? Click <a href={"/"}>HERE</a>.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Homepage;