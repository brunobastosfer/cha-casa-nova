import React from 'react';

const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-20 text-center">
      <h3 className="text-3xl text-gray-500 mb-8">Ultimos presentes comprados</h3>
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="product-card bg-gray-50 p-4 m-2 rounded shadow-md">
          <h4 className="text-xl text-gray-500">Produto 1</h4>
          <p className="text-teal-500 mt-2 mb-4">$69.99</p>
          <a href="#" className="bg-teal-800 text-white py-2 px-4 rounded">Comprar</a>
        </div>
        <div className="product-card bg-gray-50 p-4 m-2 rounded shadow-md">
          <h4 className="text-xl text-gray-500">Produto 2</h4>
          <p className="text-teal-500 mt-2 mb-4">$69.99</p>
          <a href="#" className="bg-teal-800 text-white py-2 px-4 rounded">Comprar</a>
        </div>
        <div className="product-card bg-gray-50 p-4 m-2 rounded shadow-md">
          <h4 className="text-xl text-gray-500">Produto 3</h4>
          <p className="text-teal-500 mt-2 mb-4">$69.99</p>
          <a href="#" className="bg-teal-800 text-white py-2 px-4 rounded">Comprar</a>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
