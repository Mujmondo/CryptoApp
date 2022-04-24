import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News, Footer } from './components';


function App() {
  return (
    <div className="App">
      <div className="navbar p-0">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
