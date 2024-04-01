import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import FeaturedPosts from "./Components/FeaturedPosts";

const Homepage = () => {
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
                <FeaturedPosts />
            </div>
        </div>
    )
};

export default Homepage;