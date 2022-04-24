import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
const Navbar = () => {
    return (
        <header className='py-3'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="brand">
                    <Link to="/">
                        <img src={logo}
                            width='120'
                            alt="logo" />
                    </Link>
                </div>
                <ul className="navbar m-0 p-0">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/exchanges">Exchanges</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;