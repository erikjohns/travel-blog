import {FaMagnifyingGlass} from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><span>Tr</span>a<span>v</span>el Wit<span>h</span> <span>E</span>rik</h1>
            <ul>
                <li>Posts</li>
                <li>Destinations</li>
                <li>About</li>
                <li>Contact</li>
                <li><FaMagnifyingGlass color={"white"}/></li>
            </ul>
        </div>
    )
}

export default Navbar;