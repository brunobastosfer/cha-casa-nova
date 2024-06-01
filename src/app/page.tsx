import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
