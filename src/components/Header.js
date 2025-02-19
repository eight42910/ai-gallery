import React from 'react';

function Header() {
  return (
    <header className="bg-ai-gray shadow-md py-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ai-blue">AI Gallery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-ai-blue">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-ai-blue">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-ai-blue">Portfolio</a></li>
            <li><a href="#" className="text-gray-600 hover:text-ai-blue">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
