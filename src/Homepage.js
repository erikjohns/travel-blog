import Navbar from "./Components/Navbar";

const Homepage = () => {
    return (
        <div class="homepage">
            <Navbar />
            <div class="hero-container">
                <img src="https://images.unsplash.com/photo-1632114448815-e03ae5b7dcc0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero"/>
                <div class="hero-text-container">
                    <p>Latest Post</p>
                    <h1>T<span>he</span> <span>A</span>mal<span>f</span>i Coas<span>t</span></h1>
                    <h4>
                        The ins and outs of the Amalfi Coast: where to stay, where to eat, how to enjoy!
                        Learn about where I stayed, what I did, and what I think you should do.
                    </h4>
                    <button>Read Now</button>
                </div>
                <div class="hero-pagination">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
};

export default Homepage;