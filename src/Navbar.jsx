import { Link } from "react-router-dom";


export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/pricing"}>Pricing</Link></li>
            <li><Link to={"/team"}>Team</Link></li>
            <li><Link to={"/programs"}>Programs</Link></li>
            <li><Link to={"/home"}>Home</Link></li>
            {/* use anchor tag when linking to external websites*/}
        </ul>

    </nav>
}