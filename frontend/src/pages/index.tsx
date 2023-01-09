import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-blue-900 text-white py-24">
      <div className="container mx-auto px-4">
        {/* <Image
          src="/test.png"
          alt="Background image"
          width={1920}
          height={1080}
          className="h-64 w-full object-cover"
        /> */}
        <div className="relative py-10 px-4">
          <h1 className="text-3xl font-bold leading-tight mb-2">
            Welcome to My App
          </h1>
          <p className="text-xl font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;