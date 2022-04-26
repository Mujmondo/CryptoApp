import { useEffect } from "react";
import Skeleton from "./Skeleton";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ count = 20 }) => {
    const { data, isLoading } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});
    
    const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
    if(isLoading) return <div  className="page skeleton-news container py-4 mt-5"><div className="titl mb-4"></div><div className="row"><Skeleton type={"news"}/></div></div>;
    
    return ( 

      <div className="container page mt-5 pt-4 news">
            <h4 className="main-header mb-4">
                    Latest CryptoCurrency News!
                </h4>
        <div className="row">
            {data?.value.map((news) => (
            <div className="col-sm-12 col-sm-6 col-md-4 mb-3">
                <div className="card pb-2">
                    <a href={news.url} target='_blank' rel='noreferrer'>
                    <div className="card-head">
                    <img 
                    src={news?.image?.thumbnail?.contentUrl || demoImage} 
                    alt="news" />
                    <h4 className="px-2">{news.name}</h4>
                    </div>
                    <p className="px-2">
                        {news.description.length > 100 
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                        </p>
                        <div className="card-foot px-2 pt-2 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                            <img src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage}  alt="" />
                            <p className="p-0 m-0">{news?.provider[0]?.name}</p>
                            </div>
                            <span>{moment(news.datePublished).startOf('ss').fromNow()}</span>
                        </div>
                    </a>
                </div>
            </div>
            ))}
        </div>
      </div>
     );
}
 
export default News;