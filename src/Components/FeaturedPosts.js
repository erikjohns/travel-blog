const FeaturedPosts = () => {
    const featuredPostContent = [
        {
            title: "Mykonos",
            image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Greece"
        },
        {
            title: "Amsterdam",
            image: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Netherlands"
        },
        {
            title: "Dubrovnik",
            image: "https://images.unsplash.com/photo-1515515677552-07f02e46a8f6?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Croatia"
        }
    ]

    return (
        <div className="featured-posts">
            {featuredPostContent.map((post) => (
                <div className="post">
                    <img src={post.image} alt={post.title} />
                    <div className="post-content">
                        <h4>{post.description}</h4>
                        <h1>{post.title}</h1>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedPosts;