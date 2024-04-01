import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <div className="hero-container">
                <Carousel />
                <div className="homepage-section">
                    <div className="section-1">
                        <h1>My name is <em>Erik</em></h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;