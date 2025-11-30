import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
<Link to='/games/easy'>Easy</Link>
<Link to='/games/normal'>Normal</Link>
<Link to='/register'>Register</Link>
<Link to='/login'>Login</Link>
<Link to='/rules'>Rule Page</Link>
<Link to='/scores'>Score Page</Link>
<Link to='/games'>Selection Page</Link>
<Link to='/'>Home Page</Link>
    </nav>
    );
}

export default Navbar;