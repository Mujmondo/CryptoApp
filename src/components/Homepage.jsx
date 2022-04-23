import  millify from 'millify';
import  { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    if(isFetching) return 'Loading..';
    return ( 
        <>
        <div className="container py-5">
        <h2 className='main-header'>Global Crypto Stats</h2>
            <div className="row py-3">
                <div className="col-sm-12 col-md-6">
                    <div className="statistics">
                    <h6 className="side-header">Total Cryptocurrencies</h6>
                    <p className='stat-value'>5</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="statistics">
                    <h6 className="side-header">Total Exchanges</h6>
                    <p className='stat-value'>5</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="statistics">
                    <h6 className="side-header">Total Market Cap</h6>
                    <p className='stat-value'>5</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="statistics">
                    <h6 className="side-header">Total 24h Volume</h6>
                    <p className='stat-value'>5</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="statistics">
                    <h6 className="side-header">Total Markets</h6>
                    <p className='stat-value'>5</p>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Homepage;