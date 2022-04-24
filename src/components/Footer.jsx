import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-sm-6 col-lg-3">
                        <img src={logo}
                            width='120'
                            alt="logo" />
                        <p className='mt-2'>Your wide gate through CryptoWorld!</p>
                    </div>
                    <div className="col-sm-12 col-sm-6 col-lg-3">
                        <h4 className="footer-header">
                            Short links
                        </h4>
                        <ul>
                            <li><Link to='/cryptocurrencies'>Cryptocurrencies</Link></li>
                            <li><Link to='/exchanges'>Exchanges</Link></li>
                            <li><Link to='/news'>News</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-sm-6 col-lg-3">
                        <h4 className="footer-header">
                            Support
                        </h4>
                        <ul>
                            <li>Product help</li>
                            <li>Report a page issue</li>
                            <li>Report a website issue</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-sm-6 col-lg-3">
                        <h4 className="footer-header">
                            Our communities
                        </h4>
                        <ul>
                            <li>Crypto Community</li>
                            <li>Crypto Forum</li>
                            <li>Crypto Chat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;