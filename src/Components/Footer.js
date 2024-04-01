import {FaMagnifyingGlass} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-container">
                <h1><span>Tr</span>a<span>v</span>el Wit<span>h</span> <span>E</span>rik</h1>
                <p>&copy; 2024 Travel with Erik. All Rights Reserved.</p>
            </div>

            <ul>
                <li>Posts</li>
                <li>Destinations</li>
                <li>About</li>
                <li>Contact</li>
                <li><FaMagnifyingGlass color={"black"}/></li>
            </ul>
        </div>
    )
}

export default Footer;