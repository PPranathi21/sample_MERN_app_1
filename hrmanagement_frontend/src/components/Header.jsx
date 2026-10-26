import { Link } from "react-router-dom"
import './header.css'
function Header(){

    return(
        <div className="header">
           <Link to="/">Home</Link> 
           <Link to="/about">About Us</Link>
           <Link to="/contact">Contact Us</Link>
           <Link to="/register">Register</Link>
        </div>
    )
}

export default Header 