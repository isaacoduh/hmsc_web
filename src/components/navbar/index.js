import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import "./navbar.css"

const Navbar = ({handleInputChange, query}) => {
    return (<nav className="nav-container">
        <div>
            <input
                className="search-input"
                type="text"
                onChange={handleInputChange}
                value={query}
                placeholder="Search...."
            />
        </div>
        <div className="search-input">
            <a href="#">
                <FiHeart className="nav-icons"/>
            </a>
            <a href="#">
                <AiOutlineShoppingCart className="nav-icons" />
            </a>
            <a href="">
                <AiOutlineUserAdd className="nav-icons" />
            </a>
        </div>
    </nav>);
};

export default Navbar;