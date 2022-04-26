import { useState, useEffect } from 'react';
import millify from 'millify';
import { useGetCryptoCurrenciesQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ count = 100, isSearchable = true }) => {
    const [searchInput, setSearchInput] = useState('');
    const { data, isFetching } = useGetCryptoCurrenciesQuery(count);
    const [cryptos = [], setCryptos] = useState(data?.data);

    useEffect(() => {
        const filiteredData = data?.data.filter((coin) => coin.name.toLowerCase().includes(searchInput.toLowerCase()));
        setCryptos(filiteredData);
        window.scrollTo(0, 0);
    }, [data, searchInput]);

    if (isFetching) return 'Loading..';

    if (!cryptos) return 'No results found.';

    return (
        <>
            <div className="container page cryptoCurrencies mt-5 pt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="main-header mb-4">
                        {`Top ${count} CryptoCurrencies!`}
                    </h4>
                    {isSearchable && <div className="search-container mb-3 d-flex align-items-center justify-content-center text-center">
                        <input
                            type="text"
                            placeholder='Search Cryptocurrency..'
                            onChange={e => setSearchInput(e.target.value)} />
                    </div>}
                </div>
                <div className="row">
                    {cryptos.map(currency =>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                            <div className="card" key={currency.id}>
                                <div className="card-header d-flex justify-content-between align-items-center px-2 py-2">
                                    <h4 className='m-0'>{`${currency.rank}. ${currency.name}`}</h4>
                                    <span>{currency.symbol}</span>
                                </div>
                                <ul className='m-0 py-3'>
                                    <li>Market Cap USD: {millify(currency.market_cap_usd)}</li>
                                    <li>Price per BTC: {millify(currency.price_btc)}</li>
                                    <li>Price per USD: {millify(currency.price_usd)}</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cryptocurrencies;