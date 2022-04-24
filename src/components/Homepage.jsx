import { useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


const Homepage = () => {
    const { data = [], isFetching } = useGetCryptosQuery();
    if (isFetching) return 'Loading..';
    return (
        <>{data.map(currency =>
            <div className="container py-4 my-5">
                <h2 className='main-header mb-4'>Global Crypto Stats</h2>
                <div className="row section justify-content-center  text-center py-3 pb-0">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statistics">
                            <h6 className="side-header">Total Coins Count</h6>
                            <p className='stat-value'>{millify(currency.coins_count)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statistics">
                            <h6 className="side-header">Active Markets</h6>
                            <p className='stat-value'>{millify(currency.active_markets)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statistics">
                            <h6 className="side-header">Total Market Cap</h6>
                            <p className='stat-value'>{millify(currency.total_mcap)}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statistics">
                            <h6 className="side-header">Total 24h Volume</h6>
                            <p className='stat-value'>{millify(currency.total_volume)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

            <div className="container">
                <h4 className="main-header mb-4">
                    Top 10 CryptoCurrencies!
                </h4>
                <Cryptocurrencies count={10} isSearchable={false} />
                <div className="text-center mx-auto py-4">
                    <button className='more-btn'><Link to='/cryptocurrencies'>Show more</Link></button>
                </div>
            </div>

            <div className="container">
                <h4 className="main-header mb-4">
                    Latest CryptoCurrency News!
                </h4>
                <News count={6}/>    
                <div className="text-center mx-auto ">
                    <button className='more-btn'><Link to='/news'>Show more</Link></button>
                </div>
            </div>
        </>
    );
}

export default Homepage;