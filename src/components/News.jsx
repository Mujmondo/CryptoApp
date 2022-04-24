import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ count = 12 }) => {
    const { data } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});
    console.log(data);
    if(!data?.value) return 'Loading...';

    const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
    return ( 
      <div className="container mt-5 pt-4 news">
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
                        <div className="card-foot px-2 border-0 d-flex justify-content-between align-items-center">
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