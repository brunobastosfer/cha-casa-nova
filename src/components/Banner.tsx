import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="bg-blue-50 text-center py-20">
      <h2 className="text-5xl text-teal-600 mb-4">Bem-vindo ao nosso chá de casa nova</h2>
      <p className="text-lg text-gray-500 mb-8">Escolhe um produto para nos presentear.</p>
      <a href="#products" className="bg-teal-800 text-white py-2 px-6 rounded">Ver Produtos</a>
    </section>
  );
}

export default Banner;
