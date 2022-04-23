import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Homepage = () => {
    const { data = [], isFetching } = useGetCryptosQuery();
    if (isFetching) return 'Loading..';
    console.log(data);
    return (
        <>{data.map(currency =>
            <div className="container py-5">
                <h2 className='main-header'>Global Crypto Stats</h2>
                <div className="row py-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="statistics">
                            <h6 className="side-header">Total Coins Count</h6>
                            <p className='stat-value'>{millify(currency.coins_count)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="statistics">
                            <h6 className="side-header">Active Markets</h6>
                            <p className='stat-value'>{millify(currency.active_markets)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="statistics">
                            <h6 className="side-header">Total Market Cap</h6>
                            <p className='stat-value'>{millify(currency.total_mcap)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="statistics">
                            <h6 className="side-header">Total 24h Volume</h6>
                            <p className='stat-value'>{millify(currency.total_volume)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Homepage;