import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-6 text-center">
      <p className="text-gray-400">&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
      <div className="mt-4">
        <a href="#" className="text-teal-300 mx-2">Facebook</a>
        <a href="#" className="text-teal-300 mx-2">Twitter</a>
        <a href="#" className="text-teal-300 mx-2">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
