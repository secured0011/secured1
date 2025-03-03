import React, { useState } from 'react';
import { MicrosoftLogo } from './MicrosoftLogo';
import { ChevronRight, Key, ArrowLeft } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowPassword(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo. No actual login occurs.');
  };

  const handleBack = () => {
    setShowPassword(false);
  };

  return (
    <div className="flex flex-col items-center">
      <MicrosoftLogo className="mb-4" />
      
      {!showPassword ? (
        <form onSubmit={handleEmailSubmit} className="w-full">
          <h1 className="text-2xl font-light mb-4">Sign in</h1>
          <div className="mb-6">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Email, phone, or Skype"
              required
            />
          </div>
          <div className="mb-6 text-xs text-gray-600">
            <p>No account? <a href="#" className="text-blue-600 hover:text-blue-800">Create one!</a></p>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-xs text-blue-600 hover:text-blue-800">
              Can't access your account?
            </a>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 flex items-center"
            >
              Next <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit} className="w-full">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" /> {email}
          </button>
          <h1 className="text-2xl font-light mb-4">Enter password</h1>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <a href="#" className="text-xs text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
            >
              <Key size={16} className="mr-1" /> Sign-in options
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 flex items-center"
            >
              Sign in <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;