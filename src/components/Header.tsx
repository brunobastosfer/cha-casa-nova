import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-300">Logo</h1>
      </div>
    </header>
  );
}

export default Header;