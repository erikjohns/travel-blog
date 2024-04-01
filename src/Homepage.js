import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";

const Homepage = () => {
    return (
        <div class="homepage">
            <Navbar />
            <div class="hero-container">
                <Carousel />
                <div class="homepage-section">
                    <div class="section-1">
                        <h1>My name is <em>Erik</em></h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;