import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 py-6 text-center fixed bottom-0 w-full">
      <p className="text-gray-400">&copy; 2024 Bruno Bastos. Todos os direitos reservados.</p>
      <div className="mt-4">
        <a href="#" className="text-red-700 mx-2">Facebook</a>
        <a href="#" className="text-red-700 mx-2">Twitter</a>
        <a href="#" className="text-red-700 mx-2">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;

