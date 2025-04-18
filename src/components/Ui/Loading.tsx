import { Spinner } from '@heroui/spinner';
import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen bg-black-400/20 inset-0 z-[999] fixed backdrop-blur-md flex justify-center items-center">
      <Spinner size="lg" />
      </div>
    );
};

export default Loading;