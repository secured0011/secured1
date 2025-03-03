import React from 'react';
import { MicrosoftLogo } from './MicrosoftLogo';

const Preloader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <MicrosoftLogo className="mb-8" />
      <div className="relative w-60 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-blue-500 animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;