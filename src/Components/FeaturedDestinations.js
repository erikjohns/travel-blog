const FeaturedDestinations = () => {
    const featuredDestinations = [
        {
            title: "<span>Mykonos</span>",
            image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Greece"
        },
        {
            title: "<span>A</span>ms<span>t</span>er<span>da</span>m",
            image: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Netherlands"
        },
        {
            title: "<span>Dubrovni</span>k",
            image: "https://images.unsplash.com/photo-1515515677552-07f02e46a8f6?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Croatia"
        },
        {
            title: "<span>Florence</span>",
            image: "https://plus.unsplash.com/premium_photo-1676288635850-cd91d5b2a3af?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Italy"
        }
    ]

    return (
        <div className="featured-posts">
            {featuredDestinations.map((post) => (
                <div className="post">
                    <img src={post.image} alt={post.title} />
                    <div className="post-content">
                        <h4>{post.description}</h4>
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedDestinations;