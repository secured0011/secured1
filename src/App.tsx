import React, { useState, useEffect } from 'react';
import { MicrosoftLogo } from './components/MicrosoftLogo';
import Preloader from './components/Preloader';
import LoginForm from './components/LoginForm';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Show preloader for 4 seconds
    const preloaderTimer = setTimeout(() => {
      setLoading(false);
      setShowBackground(true);
    }, 4000);

    // Show background for 2 seconds, then hide it
    const backgroundTimer = setTimeout(() => {
      setShowBackground(false);
    }, 6000);

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {loading ? (
        <Preloader />
      ) : (
        <div className="w-full max-w-md">
          {showBackground && (
            <div 
              className="fixed inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
                zIndex: -1
              }}
            />
          )}
          <div className="bg-white p-8 rounded-md shadow-sm mx-4">
            <div className="absolute top-4 right-4 text-xs text-gray-500">
              Demo - Educational Purposes Only
            </div>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;