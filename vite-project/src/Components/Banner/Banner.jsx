import React from 'react';

const Banner = () => {
  return (
    <section className="w-full h-screen bg-green-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl md:text-6xl text-center">
        Now you can feel the Energy <br />
        Start your day with <br />
        a black Coffee
      </h1>
      <button className="bg-black text-white mt-8 py-4 px-12 text-lg hover:bg-gray-800">
        Buy Now
      </button>
    </section>
  );
};

export default Banner;
