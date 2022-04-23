import { useState } from 'react';
import millify from 'millify';
import { useGetCryptoCurrenciesQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const { data, isFetching } = useGetCryptoCurrenciesQuery();
    const [cryptos, setCryptos] =  useState(data?.data);
    if (isFetching) return 'Loading..';

    return ( 
       <>
           <div className="container cryptoCurrencies my-5">
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