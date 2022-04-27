export default function Skeleton({ type }) {
    const counter = 6;
    const StatSkeleton = () => (
        <div className="page skeleton-stat container  b-b py-4 mt-5">
            <div className="titl mb-4"></div>
            <div className="stat-crd row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="stat-sm-titl"></div>
                    <div className="stat-num"></div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="stat-sm-titl"></div>
                    <div className="stat-num"></div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="stat-sm-titl"></div>
                    <div className="stat-num"></div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="stat-sm-titl"></div>
                    <div className="stat-num"></div>
                </div>
            </div>
        </div>
    );

    const NewsSkeleton = () => (
        <div className="col-sm-12 col-sm-6 col-md-4 mb-3">
            <div className="news-crd py-2">
                <div className="d-flex mb-4 justify-content-around">
                    <div className="news-bg-img"></div>
                    <div className="news-title">
                        <div className="news-titl-1 px-2"></div>
                        <div className="news-titl-2 px-2"></div>
                        <div className="news-titl-3 px-2"></div>
                    </div>
                </div>
                <div className="news-dscrp"></div>
                <div className="news-dscrp mb-3"></div>
                <div className="px-2 pt-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="news-sm-img mx-2"></div>
                        <div className="news-web p-0 m-0"></div>
                    </div>
                    <div className="news-tim mx-2"></div>
                </div>
            </div>
        </div>
    );

        const CurrenciesSkeleton = () => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div className="c-card">
                <div className="pt-2 c-hdr d-flex justify-content-between align-items-center px-2 py-2">
                    <div className="c-titl"></div>
                    <div className="c-btn"></div>
                </div>
                  <div className="px-2 mt-3">
                  <div className="c-info"></div>
                    <div className="c-info"></div>
                    <div className="c-info"></div>
                  </div>
            </div>
        </div>
        );
        
        if(type === 'stat') return <StatSkeleton />;
        if(type === 'news') return Array(counter).fill(<NewsSkeleton />);
        if(type === 'currencies') return Array(16).fill(<CurrenciesSkeleton />);
    }
