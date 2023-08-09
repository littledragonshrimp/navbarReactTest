import { Link } from "react-router-dom";


export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li><Link to={"/pricing"}>Pricing</Link></li>
            <li><a href="/about">About</a></li>
            <li><a href="/pricing">Pricing</a></li>
        </ul>

    </nav>
}