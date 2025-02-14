import React from 'react';
import { Music, Brain, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <Music className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Mood & Music</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About Us
            </Link>
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}