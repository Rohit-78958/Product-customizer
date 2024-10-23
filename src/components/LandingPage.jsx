import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DiGulp } from "react-icons/di";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={` ${window.innerWidth < 600 ? 'px-5 py-10' : 'p-10'} h-screen font-sans`}>
      { window.innerWidth > 600 ?
        <div className='flex items-baseline	'>
          <DiGulp className='mr-5 text-9xl'/>
          <div className='text-9xl font-bold mb-10'>
            <h1>LET'S</h1>
            <h1>DO</h1>
            <h1>IT!</h1>
          </div>
        </div>
        :
        <div>
          <DiGulp className='text-7xl mb-5'/>
          <div className='text-7xl font-bold mb-20'>
            <h1>LET'S</h1>
            <h1>DO</h1>
            <h1>IT!</h1>
          </div>
        </div>
      }
      <div className={` ${window.innerWidth > 600 ? 'relative bottom-20 left-40' : ''}`}>
      <p className="flex flex-col justify-center text-xl text-center mb-8">Welcome to our app! Click the button below to get started.<b>Unleash your imagination</b> and define your own style.
      </p>
      <div className='flex justify-center'>
        <button
          className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-4 px-6 rounded-lg transition duration-500 ease-in-out transform hover:scale-110"
          onClick={() => navigate('/app')}
        >
          CUSTOMIZE IT
        </button>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
