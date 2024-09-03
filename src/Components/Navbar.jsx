import { Link } from "react-router-dom";
import logo from "../Images/fishlogo.png";
const Navbar = () => {
    return (
        <div >  
           <div className="navbar bg-base-100 px-5 md:px-28 relative z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-semibold text-green-700">
                        <Link to="/"><a>Home</a></Link>
                        <li>
                        <a><Link to="/allproducts">Products</Link></a>
                        <ul className="p-2">
                            <Link  to={`/item/1`}><li><a>Shrimps</a></li></Link>
                            <Link  to={`/item/2`}><li><a>Lobster</a></li></Link>
                            <Link  to={`/item/3`}><li><a>Eel</a></li></Link>
                            <Link  to={`/item/4`}><li><a>Mud Crab</a></li></Link>
                            <Link  to={`/item/5`}><li><a>Tilapia</a></li></Link>
                        </ul>
                        </li>
                        <li><Link to="/shipping"><a>Shipping & Delivery</a></Link></li>
                        <li><Link to="/contact"><a>Contact Us</a></Link></li>
                        <li><Link to="/about"><a>About Us</a></Link></li>
                    </ul>
                    </div>
                    <Link to="/" className=" text-xl">
                        <img src={logo} className="w-20 h-20" />
                        {/* <h1>Frozen Fish</h1> */}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold text-green-700">
                    <li><Link to="/"><a>Home</a></Link></li>
                    <li>
                        <details>
                        <summary><Link to="/allproducts">Products</Link></summary>
                        <ul className="p-2 w-72">
                            <Link  to={`/item/1`}><li><a>Shrimps</a></li></Link>
                            <Link  to={`/item/2`}><li><a>Lobster</a></li></Link>
                            <Link  to={`/item/3`}><li><a>Eel</a></li></Link>
                            <Link  to={`/item/4`}><li><a>Mud Crab</a></li></Link>
                            <Link  to={`/item/5`}><li><a>Tilapia</a></li></Link>
                        </ul>
                        </details>
                    </li>
                    <li><Link to="/shipping"><a>Shipping & Delivery</a></Link></li>
                    <li><Link to="/contact"><a>Contact Us</a></Link></li>
                    <li><Link to="/about"><a>About Us</a></Link></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn text-green-700 text-lg">Shipping & Delivery</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;