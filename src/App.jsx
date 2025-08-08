import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTp';

import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/Login'; 
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import Market from './pages/Dashboard/Market';
import Portfolio from './pages/Dashboard/Portfolio';
import Futures from './pages/Dashboard/Futures';
import Summary from './pages/Summary'; 

import './App.css'; 

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="market" element={<Market />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="futures" element={<Futures />} />
          </Route>
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
